import { useState, useEffect } from 'react'
import imagenBanner from '../assets/img/header-img.svg'
import imagenFotoCarnet from '../assets/img/foto-carnet.jpg'
import './Banner.css'

const Banner = () => {

    const [text, setText] = useState('')

    useEffect(() => {
        let ticker = setInterval(() => {
            writing()
        }, 140)
        return () => { clearInterval(ticker) };
    }, [text])
    
    const writing = str => {
        let fullText = 'Hi! Mi name is Jein J. Rojas'
        let updatedText = fullText.substring(0, text.length + 1)
        setText(updatedText)
    }

    return (
        <section className='profile-section'>
            <div className='banner'>
                <div className='text-banner'>
                    <img src={imagenFotoCarnet} alt='image-header' height='250px' width='200px' />
                    <h1>Welcome to my Portfolio</h1>
                    <h2><span className="wrap">{text}</span></h2>
                    <p>I design and code beautifully simple things, and I love what I do.<span></span>
                     I'm Web developer and i'm currently participating in the Oracle ONE project in Alura Latam.</p>
                </div>
                <div className='banner-img'>
                    <img src={imagenBanner} alt='image-header' />
                </div>
            </div>
        </section>
    )
}

export default Banner