import React, { useState } from 'react'
// pexels.com for free stock videos
import Video from '../../videos/Cerrado Render.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,

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
            

                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection