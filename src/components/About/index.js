import React, { useState } from 'react'
// pexels.com for free stock videos
import Video from '../../videos/Cerrado Render 02.mp4'
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
                <AboutH1> </AboutH1>
                <AboutH2>
                    <span style={{ color: 'white' }}>
                         Propondo soluções eficientes, preocupando com a <br/> <span style={{ color: 'yellow' }}>sustentabilidade, </span><span style={{ color: 'yellow' }}>tecnologia e meio ambiente.</span>  </span>
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