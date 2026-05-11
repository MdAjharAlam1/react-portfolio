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
                    <p>
                        MERN Stack Developer with strong problem-solving skills and hands-on experience building modern, responsive, and scalable web applications. Skilled in MongoDB, Express.js, React.js, and Node.js, with a strong understanding of frontend and backend development.

Currently working as a Frontend Developer Intern at RBG.AI, focusing on developing interactive user interfaces and improving application performance. Passionate about building clean UI designs, REST APIs, and full-stack applications using modern web technologies.

Also experienced in Data Structures & Algorithms using Python, with a solid foundation in logic building, debugging, and efficient problem-solving techniques. Always eager to learn new technologies and contribute to impactful projects.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"100%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavasScript</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Typescript</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Tailwind CSS</p>
                        <hr style={{width:"90%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Next JS </p>
                        <hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Node JS</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Express</p>
                        <hr style={{width:"90%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>MongoDB</p>
                        <hr style={{width:"90%"}}/>
                    </div>
                    

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h2>1+</h2>
                <p>Years Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h2>5+</h2>
                <p>Projects Completed</p>
            </div>
        </div>
    </div>
  )
}

export default About
