import React from 'react'
import './Hero.css'
import profile_img from '../assets/ajhar_photo.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
        <img src={profile_img} alt="profile img" />
        <h1> <span> I'm Md Ajhar Alam</span>, frontend developer based in India</h1>
        <p> I am a frontend developer from Jharkhand , India with 1 years of experience in mutliple companies like microsoft,Tesla and Apple.</p>
        <div className='hero-action'>
            <div className="hero-connect"><Link className='anchor-link' to='/contact'>Connect With Me</Link></div>
            <div className="hero-resume"><a href='https://drive.google.com/file/d/1Rhmq5l_ms_Lio7U1_4i1U4uMxM9OUvUX/view?usp=sharing' target='_blank' download='ajhar_resume.pdf'>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero
