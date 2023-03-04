import { useState, createContext } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import SobreMi from './components/SobreMi'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'

import './App.css'

export const ThemeContext = createContext(null)

function App() {
    const [theme, setTheme] = useState('dark')

    const alternarTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, alternarTheme}}>
            <div className="App" id={theme}>
                <NavBar />
                <Banner />
                <SobreMi />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default App
