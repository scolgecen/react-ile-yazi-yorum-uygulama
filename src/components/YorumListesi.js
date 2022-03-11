
import React from "react";

const YorumListesi = (props) =>{
  return (

    <React.Fragment>
      {
                      props.yorumlar.map(yorum =>{
                        return(
                          
                          <div className="ui very relaxed list" key={yorum.id}>
                              <div className="item">
                               
                                <div className="content">
                                  <a className="header">{yorum.display_name}</a>
                                  <div className="description">{yorum.body} <a><b> </b></a> just now.</div>
                                </div>
                              </div>

                            </div>
                        )
                      })
                 }
    </React.Fragment>
  )
}

export default YorumListesi;
