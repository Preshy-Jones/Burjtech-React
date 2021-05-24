import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
<footer className="footer-showcase">
    <div className="footer">
        <div className="footer-col">
            <h2>About BURJTECH LIMITED</h2>
            <p>
                Lore, ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis doloremque nostrum error
                facere.
            </p>
            <div className="social">
                <a href="#"><FontAwesomeIcon className="fab" icon={['fab', 'twitter']} /></a>
                <a href="#"><FontAwesomeIcon className="fab" icon={['fab', 'facebook-f']} /></a>
                <a href="#"><FontAwesomeIcon className="fab" icon={['fab', 'linkedin-in']} /></a>
                <a href="#"><FontAwesomeIcon className="fab" icon={['fab', 'instagram']} /></a>
            </div>
        </div>
        <div className="footer-col">
            <h2>Contact Info</h2>
            <p>Address: 54, Adeniyi Jones, Ikeja Lagos.</p>
            <p> Tel.: 08068463954 ; 07033259358</p>
        </div>
        <div className="footer-col">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className="copywright">
            <p>Copyright ©2020 All rights reserved | Made By Preshy-Jones</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
