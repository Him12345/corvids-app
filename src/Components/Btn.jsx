import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Btn.css"

export const Btn = (props) => {
  return (
    <div className='Button'>

    <button className="Btn" >{props.name}</button>



    </div>
  )
}
