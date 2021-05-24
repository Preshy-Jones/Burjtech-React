import React from 'react'
import bg1 from './images/person-holding-grinder-1216544.jpg'
import bg2 from './images/pexels-kateryna-babaieva-2880872.jpg'
import bg3 from './images/abstract-blackboard-bulb-chalk-355948.jpg'
import bg4 from './images/pexels-ola-dapo-3345882.jpg'
import bg5 from './images/pexels-karolina-grabowska-4386465.jpg'
import bg6 from './images/cloud.jpg'



const Services = () => {
  return (
    <div>
    <section className="showcase-svs">
    <div className="overlay-3"></div>
    <div className="center-text">
        <h1>Our Services</h1>
        <div className="navigator">
            <a href="/">HOME</a>
            <div id="divider"></div>
            <a id="cur" href="/services">Services</a>
        </div>
    </div>
</section>
<section className="showcase-svs-3">
    <div className="top-texts">
        <div className="tp-container">
            <span className="top-text-1">Our Services</span>
            <h2 className="top-text-2">What we do</h2>
        </div>
    </div>
    <div className="services-2">
        <div className="service-2">
            <img src={bg1} alt=""/>
            <div className="service-info">
                <h1>Rapid Résponse Construction</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi facilis esse quia ea ipsam odio
                    reprehenderit officia distinctio nesciunt maxime, assumenda, odit minima et id, error aut tempore
                    facere consectetur.</p>
            </div>
        </div>
        <div className="service-2">
            <div className="service-info">
                <h1>Manufacturers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam perspiciatis exercitationem
                    impedit id quisquam eius. Accusamus ea facilis ut. Fuga voluptatum, tempore aliquid at dolores
                    dolore sint. Facere, eos.</p>
            </div>
            <img src={bg2} alt=""/>
        </div>
        <div className="service-2">
            <img src={bg3} alt=""/>
            <div className="service-info">
                <h1>Designs</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, veniam? Repudiandae tempora
                    quaerat eos neque, praesentium accusantium dolores tempore quasi odit amet quo optio deserunt, et
                    suscipit incidunt aut soluta.</p>
            </div>
        </div>
        <div className="service-2">
            <div className="service-info">
                <h1>Mobile Based Technology</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur id veniam similique. Aperiam sunt
                    hic quasi deserunt, ratione architecto beatae rerum. Possimus eveniet error ea nisi iste
                    perferendis, quidem in.</p>
            </div>
            <img src={bg4} alt=""/>
        </div>
        <div className="service-2">
            <img src={bg5} alt=""/>
            <div className="service-info">
                <h1>International trading and services</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ullam libero nihil, aliquam deserunt
                    quia a deleniti pariatur. Inventore ducimus vel animi aperiam facilis explicabo nobis consequuntur
                    minima quam et.</p>
            </div>
        </div>
        <div className="service-2">
            <div className="service-info">
                <h1>Cloud base Technology</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus consequuntur provident nobis ab
                    consectetur perspiciatis dolorum. Voluptate voluptates deserunt perferendis. Nam ratione quaerat
                    iste molestias quod alias ullam eaque asperiores.</p>
            </div>
            <img src={bg6} alt=""/>
        </div>

    </div>
</section>
<section className="showcase-svs-2">
    <div className="services">
        <div className="service">
            <i className="fas fa-hammer"></i>
            <h1>Rapid Résponse Construction
                Renovation
                Repairs
                Maintenance</h1>
        </div>
        <div className="service">
            <i className="fas fa-wrench"></i>
            <h1>Technological construction</h1>
        </div>
        <div className="service">
            <i className="fab fa-innosoft"></i>
            <h1>Designs</h1>
        </div>
        <div className="service">
            <i className="fas fa-book-reader"></i>
            <h1>Smart Equipments installation</h1>
        </div>
        <div className="service">
            <i className="fas fa-check"></i>
            <h1>Buying and selling of properties</h1>
        </div>
        <div className="service">
            <i className="fas fa-tasks"></i>
            <h1>Project Managers</h1>
        </div>
        <div className="service">
            <i className="fas fa-angle-double-down"></i>
            <h1> Manufacturers</h1>
        </div>
        <div className="service">
            <i className="fab fa-acquisitions-incorporated"></i>
            <h1>Autonomous Equipments</h1>
        </div>
        <div className="service">
            <i className="fab fa-buffer"></i>
            <h1>Smart Developers</h1>
        </div>
        <div className="service">
            <i className="fas fa-cloud"></i>
            <h1>Cloud base Technology</h1>
        </div>
        <div className="service">
            <i className="fas fa-mobile-alt"></i>
            <h1>Mobile based Technology </h1>
        </div>
        <div className="service">
            <i className="fas fa-briefcase"></i>
            <h1>Medical Technology </h1>
        </div>
        <div className="service">
            <i className="fas fa-arrows-alt"></i>
            <h1>Entertainment Technology</h1>
        </div>
        <div className="service">
            <i className="fas fa-atom"></i>
            <h1>Space Technology </h1>
        </div>
        <div className="service">
            <i className="fas fa-assistive-listening-systems"></i>
            <h1>Oil and Gas</h1>
        </div>
        <div className="service">
            <i className="fas fa-archive"></i>
            <h1>International trading and services </h1>
        </div>
        <div className="service">
            <i className="fas fa-briefcase"></i>
            <h1>General Contractors</h1>
        </div>
    </div>
</section>
<section className="showcase-3">
    <h1>Let's do more together</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
    <a className="getintouch" href="">GET IN TOUCH!</a>
</section>
    </div>
  )
}

export default Services
