import React from 'react'
import { TimelineMax} from 'gsap';
import cn1 from './images/blue-and-red-galaxy-artwork-1629236.jpg'
import cn2 from './images/abstract-blackboard-bulb-chalk-355948.jpg'
import cn3 from './images/hitachi-white-black-angle-grinder-162534.jpg'
import cn4 from './images/industry-metal-fire-radio-73833.jpg'
import bg1 from './images/pexels-cleyder-duque-3637786.jpg'
import bg2 from './images/pexels-kateryna-babaieva-2880872.jpg'
import bg3 from './images/abstract-blackboard-bulb-chalk-355948.jpg'
import bg4 from './images/pexels-ola-dapo-3345882.jpg'
import bg5 from './images/pexels-karolina-grabowska-4386465.jpg'
import bg6 from './images/cloud.jpg'
import bg7 from './images/pexels-photo-5598296.jpeg'
import bg9 from './images/photo-of-people-near-wooden-table-3184431.jpg'
import bg10 from './images/industry-metal-fire-radio-73833.jpg'
import {useState, useEffect, useRef} from 'react'

const Home = () => {

const [style, setStyle] = useState({
  backgroundImage:  `url(${cn4})`
})



const [counter, setCounter] = useState(0)

// const counter =  useRef(1)
var images = [cn1, cn2, cn3,cn4]
const autoPlayRef = useRef()


let app = useRef(null);
let tl = new TimelineMax();

useEffect(() => {

  function changeImage() {
    if (counter >= images.length) {
        return setCounter(0);
        // counter.current = 1;
    }

    setStyle({
      backgroundImage:  `url(${images[counter]})`
    })
     setCounter(counter+1);
   // console.log(counter);
    // counter.current = counter.current + 1
}


  autoPlayRef.current = changeImage

// setInterval(changeImage, 3000)
})

useEffect(()=>{
  

  const play = () => {
    autoPlayRef.current()
  }
  tl.fromTo(app, { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })  
  const interval = setInterval(play, 3000)
  return () => clearInterval(interval)
},[])


  return (
    <div>
        <section className="showcase" >
        <div className="overlay"></div>
        <div className="center-text" ref={el =>app=el}>
          <h1>BURJTECH LIMITED</h1>
          <p>We pride ourselves in delivering quality products and service</p>
        </div>
      </section>
      <section className="showcase-2">
        <div className="container">
          <div className="top-texts">
            <div className="tp-container">
              <span className="top-text-1">Our Services</span>
              <h2 className="top-text-2">We provide you with the best of services</h2>
            </div>
          </div>
          <div className="services">
            <div className="wrapper">
              <div className="svs-img" style={{backgroundImage: `url(${bg1})`}}>
              </div>
              <h2>Rapid Résponse Construction</h2>
            </div>
            <div className="wrapper">
              <div className="svs-img" style={{backgroundImage: `url(${bg2})`}}>
              </div>
              <h2>Manufacturers</h2>
            </div>
            <div className="wrapper">
              <div className="svs-img" style={{backgroundImage: `url(${bg3})`}}>
              </div>
              <h2>Designs</h2>
            </div>
            <div className="wrapper">
              <div className="svs-img" style={{backgroundImage: `url(${bg4})`}}>
              </div>
              <h2>Mobile Based Technology</h2>
            </div>
            <div className="wrapper">
              <div className="svs-img" style=  {{backgroundImage:`url(${bg5})`}}>
              </div>
              <h2>International trading and services
              </h2>
            </div>
            <div className="wrapper">
              <div className="svs-img" style={{backgroundImage: `url(${bg6})`}}>
              </div>
              <h2>Cloud base Technology</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-2">
        <div className="container-2">
          <div className="jumbotron">
            <h1>Our Goal</h1>
            <p>
              Our goal is to build smartly in a rapid and efficient way of 21st century construction.

              To provide rapid innovative and high quality services while maintaining full transparency
              throughout
              the whole process </p>
            <a className="link" href="/about">LEARN MORE<i className="fas fa-chevron-right"></i></a>
          </div>
          <div className="img" style={{backgroundImage: `url(${bg7})`}}>

          </div>
        </div>
      </section>
      <section className="showcase-2">
        <div className="container">
          <div className="top-texts">
            <div className="tp-container">
              <span className="top-text-1">Why Choose Us</span>
              <h2 className="top-text-2">Accurate Record keeping</h2>
            </div>
          </div>
          <div className="reasons">
            <div className="choose">
              <i className="far fa-clock"></i>
              <h2>Always on time</h2>
            </div>
            <div className="choose">
              <i className="fas fa-check"></i>
              <h2>Hard Working</h2>

            </div>
            <div className="choose">
              <i className="fas fa-calendar-alt"></i>
              <h2>24/7 Availability</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-5 dog-bg" style={style}>
        <div className="overlay-2"></div>
        <div className="container-4">
          <div className="top-texts-2">
            <div className="tp-container">
              <span>Work flow</span>
              <h2>How it works</h2>
            </div>
          </div>
          <div className="further-info">
            <div className="fi-container">
              <div className="fi">
                <div className="hate">
                  <div className="icon">
                    <i className="far fa-id-card"></i>
                  </div>
                  <h3>Contact Us </h3>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
            <div className="fi-container">
              <div className="fi">
                <div className="hate">
                  <div className="icon">
                    <i className="fas fa-people-carry"></i>
                  </div>
                  <h3>Make Request </h3>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
            <div className="fi-container">
              <div className="fi">
                <div className="hate">
                  <div className="icon">
                    <i className="fas fa-street-view"></i>
                  </div>
                  <h3>Negotiate </h3>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
            <div className="fi-container">
              <div className="fi">
                <div className="hate">
                  <div className="icon">
                    <i className="far fa-smile"></i>
                  </div>
                  <h3>Enjoy the service</h3>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-7">
        <div className="container about-grid ">
          <div className="cutedog" style={{backgroundImage:`url(${bg9})`}}>
          </div>
          <div className="about-text">
            <div>
              <span className="top-text-1">About us</span>
              <p>BURJTECH LTD is uniquely created to solve the deficits in the construction industries. We
                realise
                the rise of collapsed buildings, dilapidated and poorly maintained roads, bridges and the
                nonchalant attitudes towards our public infrastructures in taking prompt action, prompt
                maintenance plan to act on those problems and we came up with BURJ TECH, which is readily
                available to meet the demands sing the latest technology to solve these issues before they
                arise
                into full blown problem.</p>
              <p>One of out core strength is the need to be prompt, very prompts in solving these issues using
                technology and sustainable materials. (Fees)

                Our effort is to attend to emergency repairs, maintenance and construction services in Lagos
                and
                Nigeria.</p>
              <a className="link reduc" href="/about">LEARN MORE<i className="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-8">
        <div className="container-2">
          <div className="jumbotron-2">
            <h1>Who We Are</h1>
            <p id="f-p">Our company is formed to serve as one the 21st century construction and innovation
              company.
            </p>
            <p>We are involved in things that relates to innovation, maintenance, construction , sales,
              technology and agriculture.</p>
            <p id="l-p">Our target market comprises both (small & large scales) private, public and industrial
              sectors
              who needs a reliable and efficient development company to manage their field or on-site
              projects.
            </p>

            <a className="link reduc" href="/services">Visit Our work<i className="fas fa-chevron-right"></i></a>
          </div>
          <div className="img-2" style={{backgroundImage: `url(${bg10})`}}>

          </div>
        </div>
      </section>
      <section className="showcase-3">
        <h1>Let's do more together</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        <a className="getintouch" href="#">GET IN TOUCH!</a>
      </section>
    </div>
  )
}

export default Home
