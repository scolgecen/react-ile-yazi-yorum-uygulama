import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Yorum_Baslangic = {display_name:"",body:"",};

const YorumFormu = (props) =>{

  const [yorum,setYorum] = useState(Yorum_Baslangic);
  //setYorum(Yorum_Baslangic);

  const handleOnChange = (event) =>{
    setYorum({...yorum,[event.target.name]: event.target.value});
  };

  return (<React.Fragment>

<div className="col-md-12">
                <h5 style={{marginTop:'50px',float:'right'}}>Yorum Yaz</h5> 
                </div>
                
                 
                <form className="ui form col-md-12" onSubmit= {(event)=>{
                  props.handleSubmit(event,yorum);
                  setYorum(Yorum_Baslangic)
                }}>
                    <div className="ui mini icon input col-md-12">
                      <input type="text" placeholder="Adınız" name="display_name"
                      //onChange={(e)=> setDisplay_name(e.target.value)} value={display_name} 
                      onChange={handleOnChange} value={yorum.display_name}
                      />
                      
                    </div>

                    <div className="ui mini icon input col-md-12">
                        <textarea style={{marginTop:'5px'}}
                          className="form-control col-md-12"
                          id="" placeholder="Yorum yapınız" name="body"
                          rows="5" 
                          //onChange={(e)=> setBody(e.target.value)} value={body} 
                          onChange={handleOnChange} value={yorum.body}
                          />
                    </div>

                    <div className="ui mini icon input col-md-4" style={{marginTop:'5px'}}>
                        <button className="ui blue button" type="submit">Yorum Gönder</button>
                    </div>
                </form>
                
                <div style={{marginBottom:'15px'}}>
                <Link to={'/'} className="footer" >
                  <p><button className="btn btn-info" style={{float:'right',fontWeight:'bold',color:'white',marginTop:'15px',marginBottom:'150px'}}> <i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp;Anasayfa</button></p>
                  </Link>
                </div>


  </React.Fragment>)
}


export default YorumFormu;