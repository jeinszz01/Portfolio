import { useState, useEffect } from 'react'
import imagenFotoCarnet from '../assets/img/foto-carnet.png'
import { SectionProfile, DivBanner, DivTextBanner, DivBannerImg } from './Banner-styled-components'

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
        <SectionProfile>
            <DivBanner>
                <DivTextBanner>
                    <img src={imagenFotoCarnet} alt='image-foto' />
                    <h1>Welcome to my Portfolio</h1>
                    <h2><span className="wrap">{text}</span></h2>
                    <p>I design and code beautifully simple things, and I love what I do.<span></span>
                     I'm Web developer and i'm currently participating in the Oracle ONE project in Alura Latam.</p>
                </DivTextBanner>
                <DivBannerImg>
                    <span id='imagen-astro'></span>
                </DivBannerImg>
            </DivBanner>
        </SectionProfile>
    )
}

export default Banner