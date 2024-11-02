import React, { useState } from 'react'
import './About.css'
import theme_pattern from '../assets/theme_pattern.svg'
import profile_img from '../assets/ajhar_photo.png'
import Skills from './Skills'
import Logo from './Logo'
import Hero from './Hero'



function About() {

    const[about,setAbout] = useState(true)


  return (
    <div className='about' id="about">
        <div className='about-title'>
            <h1>About</h1>
            <img src={theme_pattern} alt="theme pattern" />
        </div>
        <div className='about-section'>
            <div className="about-left">
                <img src={profile_img} alt="profile img" />
            </div>
            <div className="about-right">
                <div className='about-para'>
                    <p>Results-oriented DSA Intern with a proven track record of leveraging strong logic and problem-solving skills to overcome challenges. Proficient in Python, adept at implementing data structures, and well-versed in fundamental sorting algorithms. Committed to continuous learning and contributing value through analytical thinking. Energetic and detail-focused algorithm developer intern with a strong command of Python and adept problem- solving skills. Proven ability in solving various problems using fundamental data structures basic and advance algorithms,demonstrating a solid understanding of complexity analysis.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavasScript</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Next JS </p>
                        <hr style={{width:"50%"}}/>
                    </div>

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h2>2+</h2>
                <p>Years Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h2>90+</h2>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h2>10+</h2>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About
