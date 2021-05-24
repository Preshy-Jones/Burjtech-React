import React from 'react'
import { useRef, useState} from 'react';



const Navbar = () => {

  const [animations, setAnimations] = useState({
      style1:{animation:null},
      style2:{animation:null},
      style3:{animation:null},
      style4:{animation:null}
  }) 


  let burger = useRef(null)
  let nav = useRef(null)
  function HandleBurger(){
        nav.classList.toggle('nav-active');

        setAnimations(state => {
          return Object.keys(state).reduce((acc,key,index) => {
            if(state[key].animation) return {...acc,[key]:{animation:null}};
            return {...acc,[key]:{animation: `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`}}
          },state);
       });
 
          burger.classList.toggle('toggle') 
 }
  


  return (
        <nav className="navbar">
            <div className="logo">
                <h3 id="art">BURJTECH</h3>
                <h3 id="scope">LIMITED</h3>
            </div>
            <div className="side-header" ref={el=>nav=el}>
                <li style={animations["style1"]}><a className="cool-link" href="/">Homepage</a></li>
                <li style={animations["style2"]}><a className="cool-link" href="/about">About</a></li>
                <li style={animations["style3"]}><a className="cool-link" href="/services">Services</a></li>
                <li style={animations["style4"]}><a className="cool-link" href="/contact">Contact</a></li>
            </div>
            <div className="burger" ref={el=>burger=el} onClick={HandleBurger}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
  )
}

export default Navbar
