import React from 'react'
import './Card.css'

function Card({key,title,description,arrowImg}) {
  return (
    <div className='card-format' key={key}>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card
