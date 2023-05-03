import { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import SobreMi from './components/SobreMi'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLigth } from './components/themes/themes'

function App() {
    const [tema, setTema] = useState(false)
    const [ activeMode, setActiveMode ] = useState(false)

    const handleTheme = () => {
        setTema(!tema)
        setActiveMode(!activeMode)
    }
    return (
        <ThemeProvider theme={tema ? themeDark : themeLigth} >
            <GlobalStyle />
            <NavBar handleTheme={handleTheme} activeMode={activeMode} setActiveMode={setActiveMode} />
            <Banner />
            <SobreMi />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </ThemeProvider>
    )
}

export default App
