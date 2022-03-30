import React from "react";
import YaziFormu from "./YaziFormu";

const YaziEkle = () => {
  return (
    <div>
        <div className="col-md-offset-3 col-md-4" style={{float:'right'}}>
        <h4 className="col-md-offset-3 bg-success text-white" style={{textAlign:'center',marginBottom:'15px',padding:'5px',border:'1px solid #ddd',fontStyle:'italic',borderRadius:'5px'}}>Yazi Ekleme Formu</h4>  
        </div>
      <YaziFormu />
    </div>
  );
};

export default YaziEkle;
