import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'
import axios from 'axios'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const data = {name,email,subject,phone,message}

    const handleSubmit = async(e)=>{
        console.log(data);
        e.preventDefault()
        setisLoading(true)

        // try{
        //     await axios.post("http://localhost:3030/send", 
        //     {
        //         name,
        //         email,
        //         subject,
        //         phone,
        //         message
        //     },
        //     {
        //         headers: {
        //           'Content-Type': 'application/x-www-form-urlencoded'
                
        //         }
        //     })
        // } catch(error){
        //     console.log(error);
        // }
        setTimeout(() => {
        axios({
            method: "POST", 
            url:"https://burjtech-api.herokuapp.com/send", 
            data:  data,    
            headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
          }).then(() => {
            setSent(true)      
            setisLoading(false)
            setName('')
            setPhone('')
            setEmail('')
            setSubject('')
            setMessage('')
          })
        }, 2000);
    }
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
        <FontAwesomeIcon className="i" icon={['far', 'address-book']} />
            <h1>Address:</h1>
            <p>54, Adeniyi Jones,<br/> Ikeja Lagos.</p>
        </div>
        <div className="info-bar" id="info-border">
        <FontAwesomeIcon className="i" icon={['fas', 'mobile-alt']} />
            <h1>Phone:</h1>
            <h2>08068463954<br/> 07033259358</h2>
        </div>
        <div className="info-bar">
        <FontAwesomeIcon className="i" icon={['far', 'envelope']} />
            <h1>Email:</h1>
            <h2>blah@email.com</h2>
        </div>
    </div>
</section>
<section className="showcase-cnt-3">
    {isLoading && <h1>Loading</h1>}
    {sent && <h1>Email has been sent</h1>}
    <h1>Get In Touch</h1>
    <form 
    onSubmit={handleSubmit}
     className="form">
        <div className="form-group">
            <input 
            name="name" 
            type="text" 
            required
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="form-box" 
            placeholder="Your Name"/>
        </div>
        <div className="form-group">
            <input 
            name="email" 
            type="text"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            className="form-box" placeholder="Your Email"/>
        </div>
        <div className="form-group">
            <input 
            name="subject" 
            type="text"
            required
            value={subject}
            onChange={(e)=>setSubject(e.target.value)} 
            className="form-box" placeholder="Subject"/>
        </div>
        <div className="form-group">
            <input 
            name="phone" 
            type="text" 
            required
            value={phone}
            onChange={(e)=>setPhone(e.target.value)} 
            className="form-box" placeholder="Phone No."/>
        </div>
        <div className="form-group">
            <textarea 
            name="message" 
            id="message"
            required
            value={message}
            onChange={(e)=>setMessage(e.target.value)}  
            rows="7" placeholder="Message"></textarea>
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
