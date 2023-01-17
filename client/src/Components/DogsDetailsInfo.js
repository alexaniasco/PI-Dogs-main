import React from 'react'
import "./DogsDetailsInfo.css"

export const DogsDetailsInfo = ({ image, name, temperamento, height, life_span}) => {
  return (
    <div className='Dogs_info'>
        

          <h2>{name}</h2>
        
        <div className='Dogs_info_img'>
            <img className='Dogs_info_img_jpg' src={image}></img>
        </div>
        <div>
          <p>Temperaments: {temperamento}</p>
          <p>Height: {height} Kg</p>
          <p>Life span: {life_span}</p>
        </div>
    </div>
  )
}
