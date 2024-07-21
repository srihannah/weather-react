import React from 'react'
import humi from './asserts/humi.jpg.jpeg'
import Winds from './Wind'



const Weatherd = ({icon,tem,city,country,lat,log,windd,humii,error,loading,cityNot}) => {
  return (
    <>
<div className='img'>
<img src={icon} />
    </div>
    <div className='tem'>{tem}°C</div>
    <div className='location'>{city}</div>
    <div className='country'>{country}</div>
    <div className='cord'>
        <div >
            <span className='lal'>latitude</span>
            <span>{lat}</span>
        </div>
        <div >
            <span className='log'>longitude</span>
            <span>{log}</span>
        </div>
    </div>
    <div className='data-con'>
        <div className='element'>
            <img src={humi } style={{width:80,height:80}} className='humi'/>
            <div className='data'>
                <div className='humi-persent'>{humii} %</div>
                <div className='text'>Humidity</div>
            </div>
        </div>
         <Winds windd={windd}/>
    </div>
   
<p className='copy'>
    Designed by <span>Hannah family</span>
</p>
    </>
  
  )
}

export default Weatherd
