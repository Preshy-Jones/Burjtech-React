import React from 'react'

const Contact = () => {
  return (
    <div>
    <section className="showcase-cnt">
    <div className="overlay-3 alt"></div>
    <div className="center-text">
        <h1>Contact Us</h1>
        <div className="navigator">
            <a href="/">HOME</a>
            <div id="divider"></div>
            <a id="cur" href="/contact">Contact</a>
        </div>
    </div>
</section>
<section className="showcase-cnt-2">
    <div className="info">
        <div className="info-bar">
            <i className="far fa-address-book"></i>
            <h1>Address:</h1>
            <p>54, Adeniyi Jones,<br/> Ikeja Lagos.</p>
        </div>
        <div className="info-bar" id="info-border">
            <i className="fas fa-mobile-alt"></i>
            <h1>Phone:</h1>
            <h2>08068463954<br/> 07033259358</h2>
        </div>
        <div className="info-bar">
            <i className="far fa-envelope"></i>
            <h1>Email:</h1>
            <h2>blah@email.com</h2>
        </div>
    </div>
</section>
<section className="showcase-cnt-3">
    <h1>Get In Touch</h1>
    <form method="POST" action="/send" className="form">
        <p>
            
        </p>
        <div className="form-group">
            <input name="name" type="text" className="form-box" placeholder="Your Name"/>
        </div>
        <div className="form-group">
            <input name="email" type="text" className="form-box" placeholder="Your Email"/>
        </div>
        <div className="form-group">
            <input name="subject" type="text" className="form-box" placeholder="Subject"/>
        </div>
        <div className="form-group">
            <input name="phone" type="text" className="form-box" placeholder="Phone No."/>
        </div>
        <div className="form-group">
            <textarea name="message" id="message" rows="7" placeholder="Message"></textarea>
        </div>
        <div className="form-group">
            <input type="submit" value="Send Message" className="submit"/>
        </div>
    </form>
</section>
<section>
    <div id="map"></div>
</section>
    </div>
  )
}

export default Contact
