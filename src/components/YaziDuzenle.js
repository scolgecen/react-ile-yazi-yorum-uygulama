import React, { useEffect, useState } from 'react'
import { api } from '../api';
import YaziFormu from './YaziFormu';
const YaziDuzenle =(props) => {
  const [yazi,setYazi] = useState({});
  const {id} = props.match.params;
  //console.log(id);
  
  useEffect(()=>{
    api().get(`/posts/${id}`)
    .then(response=>{
      setYazi({title:response.data.title,content:response.data.content})
    })
  },[])
  return (
    <YaziFormu yazi={yazi}/>
  )
}

export default YaziDuzenle;