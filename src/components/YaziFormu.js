import { api } from "../api";
import React, { useEffect, useState } from "react";

import {Link, withRouter,useParams, useHistory} from "react-router-dom";

const YaziFormu = (props) =>{

  const [yazi, setYazi] = useState({
    title: "",
    content: "",
  });
  const { id } = useParams();
  const history = useHistory();


  
  const [hata, setHata] = useState("");
  //console.log('yazi formu props : ',props)
  const  onInputChange = (event) => setYazi({ ...yazi, [event.target.name]: event.target.value });

  const onformSubmit = (event) =>{
    event.preventDefault();
    setHata("");
    if (props.yazi?.title) {
      api()
        .put(`/posts/${id}`, yazi)
        .then((response) => {
          console.log(response);
          history.push(`/posts/${id}`);
        })
        .catch((error) => {
          setHata("Başlık ve yazı içeriği alanları zorunludur.");
        });
    } else {
      api()
        .post("/posts", yazi)
        .then((response) => {
          history.push("/");
        })
        .catch((error) => {
          setHata("Başlık ve yazı içeriği alanları zorunludur.");
        });
    }
    
  };

  useEffect(() => {
    if (props.yazi?.title && props.yazi?.content) setYazi(props.yazi);
  }, [props.yazi]);

  return (
    <React.Fragment>

      {hata && (
        <div className="ui error message">

        
            <div className="header col-md-4">Hata !!!!</div>
            <p>
              {hata}
            </p>
        </div>
          
        )}

      
            <div className="ui form col-md-12" style={{marginBottom:'100px'}}>
                <div className="field">
                  <label>Yazı Başlığı</label>
                      <input  
                          value={yazi?.title}
                          type="text"
                          name="title"
                          onChange={onInputChange} />
                </div>

            

                <div className="field">
                  <label>Yazı İçeriği</label>
                  <textarea rows="6"  value={yazi.content} name="content" onChange={onInputChange}></textarea>
                </div>
                <button className="btn btn-success" style={{marginRight:'5px'}} onClick={onformSubmit}><i className="fa fa-save"></i> &nbsp;Kaydet</button>
                <button className="btn btn-secondary">İptal Et</button><br />
                <Link  to="/" className="btn btn-info text-white" style={{float:'right'}}><i className="fa fa-arrow-left"></i> &nbsp;anasayfa</Link>
                
            </div>
        </React.Fragment>
          )
  }
export default withRouter(YaziFormu);