import React from "react"

import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Navbar from "./Navbar"

import "./app.css"

function App() {
    return (
        <>  
            <div className="my-nav-bar">
                <Navbar />
            </div>
            <div className="full-height" id="home">
                <Home />
            </div>
            <div className="full-height" id="about">
                <About />
            </div>
            <div className="full-height" id="portfolio">
                <Portfolio />
            </div>
            <div className="full-height" id="contact">
                <Contact />
            </div>
        </>
    )
}

export default App