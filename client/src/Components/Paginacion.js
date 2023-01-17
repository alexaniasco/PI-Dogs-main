import React from 'react'
import './Paginacion.css'

export const Paginacion = ({prevhandler,nexthandler}) => {
  return (
    <footer className='paginacion'>
        <div>
            <div>
            <button className="botone" onClick={() => prevhandler()}>
          ⏪
        </button>
        <button className="botone" onClick={() => nexthandler()}>
        ⏩
        </button>
            </div>
        </div>
    </footer>
  )
}
