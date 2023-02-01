import './contact.css'
import Phone from '../../images/phone.png'
import Address from '../../images/address.png'
import Email from '../../images/email.png'
import { useRef , useState, useContext } from 'react'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context'
const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef()
    const [done,setDone] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_dpaq8xo', 'template_mbhuhvu', formRef.current, 'J5_Vh8KRww-1piAP6')
        .then((result) => {
            console.log(result.text);
            setDone(true); 
        }, (error) => {
            console.log(error.text);
        });
        
    }
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">Let's discuss your project</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src={Phone} alt="" className='c-icon'/>
                      +917017251685
                  </div>
                  <div className="c-info-item">
                      <img src={Email} alt="" className='c-icon'/>
                      namankhurana9083@gmail.com
                  </div>
                  <div className="c-info-item">
                      <img src={Address} alt="" className='c-icon'/>
                      H/No: 5/2655, Radha Vihar, Gopal Nagar, Saharanpur, Uttar Pradesh, India
                  </div>
              </div>
          </div>
          <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}> 
              <input style={{backgroundColor: darkMode && '#333'}} type="text" name="user_name" id="" placeholder='Name' />
              <input style={{backgroundColor: darkMode && '#333'}} type="text" name="user_subject" id="" placeholder='Subject' />
              <input style={{backgroundColor: darkMode && '#333'}} type="text" name="user_email" id="" placeholder='E-Mail' />
              <textarea style={{backgroundColor: darkMode && '#333'}} name="message" id="" cols="30" placeholder='Message' rows="5"></textarea>
              <button >Submit</button>
              {done && "Thank You"}
          </form>
          </div>
      </div>
    </div>
  )
}

export default Contact
