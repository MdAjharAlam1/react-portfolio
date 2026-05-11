import React from 'react'
import './Hero.css'
import profile_img from '../assets/ajhar_photo.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
        <img src={profile_img} alt="profile img" />
        <h1> <span> I'm Md Ajhar Alam</span> MERN Stack Developer </h1>
        <p>
          I’m a MERN Stack Developer  with 1+ years of experience building modern and responsive web applications. Currently, I’m working as a Frontend Developer Intern at RBG.AI, where I build scalable UI components and responsive user experiences using React.js, TypeScript, and Tailwind CSS.
          I specialize in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js while focusing on clean UI design, performance optimization, and responsive user experiences.
        </p>
        <div className='hero-action'>
            <div className="hero-connect"><Link className='anchor-link' to='/contact'>Connect With Me</Link></div>
            <div className="hero-resume"><a href='https://drive.google.com/file/d/1n253TAjauZs27KJFKcHEGawZ235tp9Su/view?usp=sharing' target='_blank' download='ajhar_resume.pdf'>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero
