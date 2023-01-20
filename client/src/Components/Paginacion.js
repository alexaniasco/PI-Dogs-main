import React from 'react'
import './Paginacion.css'

export const Paginacion = ({prevhandler,nexthandler}) => {
  return (
  
       
            <div className='paginacion'>
            <button className="botone" onClick={() => prevhandler()}>
          ⏪
        </button>
        <button className="botone" onClick={() => nexthandler()}>
        ⏩
        </button>
            </div>
        
   
  )
}
