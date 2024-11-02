import React from 'react'
import './Card.css'

function Card({key,title,description,arrowImg}) {
  return (
    <div className='card-format' key={key}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-readmore">
            <p>Read More</p>
            <img src={arrowImg} alt="arrwow img" />
        </div>
    </div>
  )
}

export default Card
