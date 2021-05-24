import React from 'react'
import bg1 from './images/photo-of-people-near-wooden-table-3184431.jpg'
import bg2 from './images/pexels-thirdman-6109288.jpg'
import bg3 from './images/pexels-thirdman-6109288.jpg'
import bg4 from './images/blue-and-red-galaxy-artwork-1629236.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () => {
  return (
    <div>
      <section className="showcase-abt">
    <div className="overlay-3"></div>
    <div className="center-text">
        <h1>About Us</h1>
        <div className="navigator">
            <a href="/">HOME</a>
            <div id="divider"></div>
            <a id="cur" href="/about">ABOUT US</a>
        </div>
    </div>
</section>
<section className="showcase-7">
    <div className="container about-grid ">
        <div className="cutedog" style={{backgroundImage: `url(${bg1})`}}>
        </div>
        <div className="about-text ">
            <div className="section-wrap">
                <span className="top-text-1">About us</span>
                <p>BURJTECH LTD is uniquely created to solve the deficits in the construction industries. We realise
                    the rise of collapsed buildings, dilapidated and poorly maintained roads, bridges and the
                    nonchalant attitudes towards our public infrastructures in taking prompt action, prompt
                    maintenance plan to act on those problems and we came up with BURJ TECH, which is readily
                    available to meet the demands sing the latest technology to solve these issues before they arise
                    into full blown problem.</p>
                <p>One of out core strength is the need to be prompt, very prompts in solving these issues using
                    technology and sustainable materials. (Fees)

                    Our effort is to attend to emergency repairs, maintenance and construction services in Lagos and
                    Nigeria.</p>
                <p>BURJTECH LTD is included in different construction activities , such as, civil engineering
                    construction, building works for residential , commercial and industrial project services.
                    Our aim is to be involved in a Rapid Response projects, Road constructions, designs, repairs,
                    renovation, maintenance and general contractor.</p>
            </div>
        </div>
    </div>
</section>
<section>
    <div className="top-texts">
        <div className="tp-container">
            <span className="top-text-1">OUR MISSION</span>
            <h2 className="top-text-2">To deliver Prompt and sustainable infrastructures</h2>
        </div>
    </div>
    <div className="objectives">
        <h1>Objectives</h1>
        <ul>
            <li>To provide a prompt purpose construction and a prompt maintenance services</li>
            <li>To provide timely repairs for general contruction.</li>
        </ul>
    </div>
</section>
<section className="showcase-abt-2">
    <h1>Meet Our Team</h1>
    <span className="top-text-1">FOUNDERS</span>
    <div className="founders">
        <div className="founder" id="f-f">
            <h2>Mr. Oluwaniyi - Asaaju Israel</h2>
            <h3>Chief Executive Officer</h3>
            <img src={bg2} alt=""/>
            <p>A distinguished businessman, with a keen interest for diverse of business. He started having his
                hands on business with the sales of gadgets while in his secondary school days some 16 years ago. A
                reputable graduate of Agricultural Engineering from Olabisi Onabanjo University,

                He is currently the owner of H N M Goshen Ventures, which deals with sales of cars, gadgets, wears
                and accessories.

                Mr Israel is a diligent and hardworking man, having worked and nurtured his business from zero Naira
                to 25 million in the span of 4 years.</p>
        </div>
        <div className="founder">
            <h2>Mr Oluwasegun Adedunye</h2>
            <h3> Chief Operation Manager</h3>
            <img src={bg3} alt=""/>
            <p> A passionate idealist and Data analyst, a graduate of Geography and
                Planning from University of Lagos.
                He is an optimistic and resilient man that never gets tired of churning out solutions. He is also a
                business man who involves in sales of wears and accessories, sales of cars, real estate, Travel and
                Tourism.</p>
        </div>
    </div>
</section>
<section className="showcase-9">
    <span className="top-text-1">STAFF</span>
    <p>Olaogun Adefolake Elizabeth - Chief Engineer (Non- Executive )</p>
    <p>Abayomi Peter Olugbenga - Civil Engineer (Non- Executive)</p>
    <p>Adedunye Adebusola Elizabeth - Surveyor (Freelance)</p>
</section>
<section className="showcase-2" id="pad">
    <div className="container-2" id="jumbo-abt">
        <div className="img-2" style={{backgroundImage: `url(${bg4})`}}>

        </div>
        <div className="jumbotron-2">
            <h1>Our Vision</h1>
            <p id="f-p">The purpose of this company is to meet up the deficits in construction industry bu acting
                promptly and swiftly, to repairs, maintenance reconstruction and construction of infrastructures.
            </p>
            <p>This company is envisioned to be one of the leading company in construction industry that would be
                able to finish projects at a very shorter time than it is expected.</p>
            <a className="link" href="/services">Visit Our work<FontAwesomeIcon icon={['fas', 'chevron-right']} /></a>
        </div>

    </div>
</section>
<section className="showcase-3">
    <h1>Let's do more together</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
    <a className="getintouch" href="/contact">GET IN TOUCH!</a>
</section>
    </div>
  )
}

export default About
