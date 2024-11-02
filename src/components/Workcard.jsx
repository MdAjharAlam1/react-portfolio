import React from 'react'
import './Workcard.css'

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
            <div>githuLink</div>
            <div>deployLink</div>
        </div>
    </div>
  )
}

export default Workcard
