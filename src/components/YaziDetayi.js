import React, { useState, useEffect } from "react";
import axios from "axios";
//import YorumFormu from './YorumFormu';
//import { Link } from "react-router-dom";
import YaziYorumlari from "./YaziYorumlari";



const  YaziDetayi = (props) =>{
  

  const {id} = props.match.params;
  const [yaziDetayi, setYaziDetayi] = useState({});
  const [yorumlar, setYorumlar] = useState([]);

  //const [display_name, setDisplay_name] = useState('');
  //const [body, setBody] = useState('');

    /*************************/
    const handleCommentSubmit = (event,yorum) =>{
      event.preventDefault();
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,yorum)
              .then((response)=>{
        //console.log(response);
        setYorumlar([...yorumlar,response.data]);
        
      }).catch((error)=>{
        console.log(error);
      });
    }
    /*************************/
   
      /*************************/

    useEffect(()=>{

        axios.all([
          axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
          axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
        ]).then(response =>{
          //console.log(response)
          setYaziDetayi(response[0].data)
          setYorumlar(response[1].data)
        }).catch((error)=>{
          console.log(error);
        })
         /*
          axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
          .then((response)=>{
            setYaziDetayi(response.data)
          }).catch((error)=>{
            console.log(error);
          });

          axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
          .then((response)=>{
            console.log(response.data);
            setYorumlar(response.data)

          });
          */
        },[])
    /*************************/    
        return (
                <React.Fragment>
                  <h2 className="ui header">{yaziDetayi.title} 
                      <span className="pull-right" 
                      style={{float:'right',fontSize:'12px',
                      backgroundColor:'orange',color:'black',
                      padding:'2px 10px 2px 10px',borderRadius:'5px',
                      fontStyle:'italic'}}>
                        {yaziDetayi.created_at}
                        </span>
                    </h2><hr></hr>
                  <p>{yaziDetayi.content}</p>
                
                 <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit} />

               
                </React.Fragment>
                );

}

export default YaziDetayi;