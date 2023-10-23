import React from 'react'
import "../Styles/Card.css"
import img5 from "../Images/img5.jpg"

export const Card = (props) => {
  return (
    <div className='Card'>
     
  <div className="img" >
    <img src={props.image} alt="" />
  </div>

<div className="title" >
<h4>{props.title}</h4>
<p>{props.subtitle}</p>


</div>
     
      


    </div>
  )
}
