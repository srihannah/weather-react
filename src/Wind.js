import React from 'react'
import wind from './asserts/wind.jpg.png'

const Winds = ({windd}) => {
  return (
    <div>
      
      <div className='element'>
            <img src={wind } style={{width:80,height:80}} className='wind'/>
            <div className='data'>
                <div className='wind-persent'>{windd} km/h</div>
                <div className='text'>Wind Speed</div>
               </div>
            </div>
    </div>
  )
}

export default Winds
