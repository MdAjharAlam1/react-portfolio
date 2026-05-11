import React from 'react'
import './Skills.css'
import theme_pattern from '../assets/theme_pattern.svg'
import arrowIcon from '../assets/arrow_icon.svg'
import skills_data from '../assets/skills_data'
import Card from './Card'


function Skills() {
  return (
    <div className='skill'>
        <div className="skill-title">
            <h1>Skills</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="skills-container">
            {skills_data.map((skill,index)=>{
                return <Card key={index} title={skill.s_name} description={skill.s_desc} arrowImg={arrowIcon}/>
            })}
        </div>
    </div>
  )
}

export default Skills
