import React, { useState } from 'react'
// pexels.com for free stock videos
import Video from '../../videos/video3.mp4'
import {
    AboutContainer,
    AboutBg,
    VideoBg,
    AboutContent,
    AboutH1,
    AboutH2,
    AboutBtnWrapper,
    ArrowForward,
    ArrowRight
} from './AboutElements'

import { Button } from '../ButtonElement'

const About = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <AboutContainer id="about">
            <AboutBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </AboutBg>
            <AboutContent>
                <AboutH1> Quem somos </AboutH1>
                <AboutH2> A Cerrado Engenharia e Consultoria Ambiental 
                    <span style={{ color: 'white' }}> é uma empresa que oferece soluções 
                    em meio ambiente, engenharia e gestão para garantir um futuro sustentável.</span>
                </AboutH2>
                
                
                <AboutBtnWrapper>
                    <Button 
                        to="footer" 
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
                        Entrar em contato
                        {hover ? <ArrowForward/> : <ArrowRight/>} 
                    </Button>
                </AboutBtnWrapper>
            </AboutContent>
        </AboutContainer>
    )
}

export default About