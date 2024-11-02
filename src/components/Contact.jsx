import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import './Contact.css'
import mailIcon from '../assets/mail_icon.svg'
import callIcon from '../assets/call_icon.svg'
import locationIcon from '../assets/location_icon.svg'

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8c4e70e5-c839-4442-b28d-dd527c29037a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


    return (
        <div className='contact' id="contact">
            <div className="contact-title">
                <h2>Get in touch</h2>
                <img src={theme_pattern} alt="theme pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h3>Let's talk</h3>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mailIcon} alt="" />
                            <p>mdajharalam68@gmai.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={callIcon} alt="" />
                            <p>+916204510791</p>
                        </div>
                        <div className="contact-detail">
                            <img src={locationIcon} alt="" />
                            <p>Hazaribagh, Jharkhand</p>
                        </div>
                    </div>
                </div>
                <form className='contact-right' onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="name" placeholder='Enter your name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="email" placeholder='Enter your email' />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
