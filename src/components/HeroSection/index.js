import React, { useState } from 'react'
// pexels.com for free stock videos
import Video from '../../videos/video2.mp4'
import LogoImage from "../../images/logocerrado1000.jpg"
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
            <img className='img'
                src={LogoImage}
                alt="Logo"
                style={{
                width: '400px',
                height: '100px',
                marginTop: '-140px',
                borderRadius: '50px',
                position: 'absolute', // Set the image position to absolute
                top: '50%', // Center the image vertically
                left: '50%', // Center the image horizontally
                transform: 'translate(-50%, -50%)', // Center the image perfectly
                zIndex: '1', // Set a higher z-index to ensure the image appears above the content
                }}
            />
                
                
                <HeroP> 
                    Propondo soluções eficientes preocupando com a <span style={{ color: 'yellow' }}>sustentabilidade</span>, <span style={{ color: 'yellow' }}>tecnologia</span> e <span style={{ color: 'yellow' }}>meio ambiente</span>.
                </HeroP>
                
                <HeroBtnWrapper>
                    <Button 
                        to="services" 
                        onMouseEnter={ onHover } 
                        onMouseLeave={ onHover }
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass='active'
                        exact='true'
                        > 
                        VEJA NOSSO PORTFÓLIO
                        {hover ? <ArrowForward/> : <ArrowRight/>} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection