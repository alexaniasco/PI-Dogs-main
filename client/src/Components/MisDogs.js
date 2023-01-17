import React, { useEffect, useState } from 'react'
import GetDogs from '../helpers/GetDogs'
import Title from './SearchBar'
import Card from './Card'

export const MisDogs = () => {

    const [misdogs , setMisdogs] = useState({})

    useEffect(()=>{
   
        GetDogs()
        .then((r)=>console.log(r))
    },[])

    
if(misdogs)
  return (
    <div>
        <Title></Title>
     <div>
     <div className="App_cont">
        
      </div>
     </div>
    </div>
  )

  else return(
    <h1>loading...</h1>
  )
}
