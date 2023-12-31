import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 0px;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
    @media (max-width: 412px) {
        .img {
          padding: 0 1rem; /* Add 1rem spacing on the sides */
        }
      }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0; 
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 3rem;
        margin-top: 0;
    }
`
export const HeroH2 = styled.h2`
    color: #3b893f;
    font-size: 33px;
    text-align: center;
    padding: 8px 24px;
    @media screen and (max-width: 768px) {
        font-size: 28px;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
        
    }
`

export const HeroP = styled.p`
    color: #fff;
    font-size: 2rem;
    text-align: center;
    max-width: 600px;
    margin-top: 100px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        padding: 0 50px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`

`