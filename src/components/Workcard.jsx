import React from 'react'
import './Workcard.css'
import { Link } from 'react-router-dom'

function Workcard({workImage,title,description,deployLink,githuLink}) {
  return (
    <div className='workcard' id="portfolio">
        <div className='workcard-img'>
            <img src={workImage} alt="" />
        </div>
        <div className='workcard-body'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className='workcard-link'>
            <Link className='link' to={`${githuLink}`} target='_blank'>Github</Link>
            <Link className='link' to={`${deployLink}`} target='_blank'>Deploy</Link>
        </div>
    </div>
  )
}

export default Workcard
