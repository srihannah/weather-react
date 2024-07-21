
import './App.css';
import Weatherd from './Weatherd';
import search from './asserts/search.png.jpg'
import sun from './asserts/sun.png.jpeg'
import rain from './asserts/rain.png.jpeg'
import cold from './asserts/cold.png.jpeg'
import light from './asserts/l.png.jpeg'
import dril from './asserts/dril.jpg.jpeg'

import { useEffect, useState } from 'react';
import Last from './Last';

function App() {
  let api_key="627070b6be7fe8d1eef779342ec122b0";
let [text,setText]=useState("Chennai");


  let [icon,setIcon]=useState(light);
  let [tem,setTem]=useState(0);
  let [city,setCity]=useState("");
  let [country,setCountry]=useState("");
  let[lat,setLat]=useState(0);
  let[log,setLog]=useState(0);
  let[humii,setHumii]=useState(0);
  let[windd,setWindd]=useState(0);
  let[cityNot,setCityNot]=useState(false);
  let[loading,setLoading]=useState(false);
  let [error,setError]=useState(null);

  let conMap = {
    "01d":sun,
    "01n":sun,
    "02d":light,
    "02n":light,
    "03d":dril,
    "03n":dril,
    "04d":dril,
    "04n":dril,
    "09d":rain,
    "09n":rain,
    "010d":rain,
    "010n":rain,
    "013d":cold,
    "013n":cold,



  }

  let searchh = async ()=>{
   setLoading(true);


    let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try{
let res = await fetch(url);
let data= await res.json();
if(data.cod==='404'){
  console.error("city not found");
  setCityNot(true);
  setLoading(false);
  return;
}
setHumii(data.main.humidity);
setWindd(data.wind.speed);
setTem(Math.floor(data.main.temp));
setCity(data.name);
setCountry(data.sys.country);
setLat(data.coord.lat);
setLog(data.coord.lon);
let weathercode = data.weather[0].icon;
setIcon(conMap[weathercode] || sun);
setCityNot(false);

    }catch(error){
console.error("an error:",error.messege);
setError("Error while fiting data.");
    }finally{
setLoading(false)
    }
  }
   let handleCity = (e) => {
setText(e.target.value);
   };
   let keydown= (e)=> {
    if(e.key === "Enter"){
      searchh()
    }
   };
   useEffect(function(){
    searchh();
   },[])

  return (
    <>
    <div className="container">
      <div className="input-con">
        <input type="text"  className="cityinput" placeholder="Search city" onChange={handleCity} value={text} onKeyDown={keydown}/>
<div className="search" onClick={()=>searchh()}>
  <img src={search}  style={{width:30,height:30}}/>
</div>
      </div>
      {!loading && ! cityNot && <Weatherd icon={icon} tem={tem} city={city} country={country} lat={lat} log={log} humii={humii} windd={windd} error={error} loading={loading}
      cityNot={cityNot}/>}
      <Last loading={loading} error={error} cityNot={cityNot} />
     </div>
   
    </>
    
  );
}

export default App;
