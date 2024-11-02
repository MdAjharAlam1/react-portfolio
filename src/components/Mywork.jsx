import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import arrowIcon from '../assets/arrow_icon.svg'
import './Mywork.css'
import mywork_data from '../assets/mywork_data'
import Workcard from './Workcard'

function Mywork() {
  return (
    <div className='mywork' id="work">
        <div className="mywork-title">
            <h2>My Latest Work</h2>
            <img src={theme_pattern} alt="theme pattern" />
        </div>
        <div className="mywork-container">
            {
                mywork_data.map((item,index)=>{
                    return <Workcard key={index} title={item.w_name} description={item.w_desc} workImage={item.w_img}/>
                })
            }
        </div>
        <div className="mywork-showMore">
            <p>Show More</p>
            <img src={arrowIcon} alt="" />
        </div>
    </div>
  )
}

export default Mywork
