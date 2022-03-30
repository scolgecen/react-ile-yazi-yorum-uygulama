import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Moment from "react-moment";
import 'moment/locale/tr'
//import axios from "axios";

const YaziListesi = () => {
  const [yaziListesi, setYaziListesi] = useState([]);

  console.log({ yaziListesi });

  useEffect(()=>{
    api().get('/posts')
    .then(response=>{
      setYaziListesi(response.data)
    });
},[]);


  return (
   


<div className="ui relaxed divided list">

{yaziListesi.map((yazi) =>{
return (
 <div className="item" key={yazi.id}>
             <i className="large react middle aligned icon"></i>
             <div className="content">
             <Link to={`/posts/${yazi.id}`} className="header" style={{textDecoration:'none'}}>
                <h3 style={{color:'teal'}}>{yazi.title}</h3>
              </Link>
                 <div className="description">
                <Moment format="DD MMMM YYYY">
                {yazi.created_at}
                </Moment>
                 </div>
                 
             </div>
             <div className="float-right" style={{float:'right'}}>
               {/* 
                <article className="pull-right " style={{/*padding:'5px',border:'1px solid gray',borderLeft:'none',borderRight:'none'}} >
                      <button type="button" size='mini' className="ui button teal">
                        <Link to={`/posts/${yazi.id}/edit`} style={{color:'white',textDecoration:'none'}}>
                        <i className="fa fa-pencil"></i> &nbsp;
                        </Link>
                      </button>
                        &nbsp;
                      <button type="button" size='mini' className="ui button red ">
                        <Link to="/" style={{color:'white',textDecoration:'none'}}>
                        <i className="fa fa-remove"></i> &nbsp;
                        </Link>
                      </button>
                    
                    </article>
               */}
            
                    <Button.Group>
                    <Link to={`/posts/${yazi.id}/edit`} >
                    <Button className="orange" size='mini'> <i className="fa fa-pencil"></i> &nbsp;Düzenle</Button>
                        </Link>
                      
                      <Button.Or text='' />
                      <Button negative size='mini'><i className="fa fa-remove"></i>&nbsp;Sil</Button>
                    </Button.Group>
             </div>
         </div>            
)
})}

</div>
  );
};

export default YaziListesi;
