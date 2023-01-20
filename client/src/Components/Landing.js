import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from "../redux/actions/index";


export const Landing = () => {



  return (
    <div>
        <div>
            <Link to={"/"}>Ir al home</Link>
        </div>
    </div>
  )
}
