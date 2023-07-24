import { useRef, useState, useEffect } from 'react'
import { SectionContact, ContactContainer, DivContactForm, DivFormContent, DivTextarea } from './Contact-styled-component';
import emailjs from '@emailjs/browser';
import contactImg from '../assets/img/contact-img.svg'

const Contact = () => {
    /* Animation */
    const [animado, setAnimado ] = useState(false)
    const boxRef = useRef()
    
    const mostrarScroll = () => {
        let scrollTops = document.documentElement.scrollTop
        const y = boxRef.current.offsetTop;
        if(y - 480  < scrollTops) {
            setAnimado(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', mostrarScroll)
    }, [])

    /* EmailJs */
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')

    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }

    const sendEmail = async (e) => {
        e.preventDefault()
        setButtonText("Sending...")

        const respuesta = await emailjs.sendForm('service_di55r17', 'template_4gknke9',e.target, 'zURj0Yyc8tfCuWJAR')
        // .then(response => console.log(response))
        // .catch(error => console.log(error))
        //console.log(respuesta)
        
        setFormDetails(formInitialDetails)
        if(respuesta.status === 200) {
            alert('Correo enviado correctamente')
            setButtonText("Send new")
        }
    }

    return (
        <SectionContact id='contact'>
            <ContactContainer animado={animado} ref={boxRef} >
                <div>
                    <img src={contactImg} alt='img-contact' />
                </div>
                <DivContactForm>
                    <h2>Get In Touch</h2>
                    <form onSubmit={sendEmail}>
                        <DivFormContent>
                            <input type="text" name='user_name' required  placeholder="First Name" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                            <input type="text" name='user_lastname'  placeholder="Last Name. (*optional)" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            <input type="email" name='user_email' required  placeholder="Email Address" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                            <input type="tel" name='user_phone'  placeholder="Phone No. (*optional)" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            <DivTextarea>
                                <textarea name='user_message' rows="6" required  placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <span>* Some fields are required.</span>
                            </DivTextarea>
                            <div>
                                <button type="submit"><span>{buttonText}</span></button>
                            </div>
                        </DivFormContent>
                        
                    </form>
                </DivContactForm>
            </ContactContainer>
        </SectionContact>
    )
}

export default Contact