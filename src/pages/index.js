import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'
import ClienteParceiro from '../components/ClienteParceiro'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        let abortController = new AbortController();
        setIsOpen(!isOpen);
        return () => {
            abortController.abort();
        }
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <About/>
            <Services/>
            <ClienteParceiro/>
            <Footer/>
        </>
    )
}

export default Home