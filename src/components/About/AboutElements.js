import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const AboutContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 810px;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const AboutBg = styled.div`
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

export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 1rem;
    margin-top: 15rem;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-top: 3rem;
    }
`
export const AboutH2 = styled.h2`
    color: #3b893f;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
        margin-top: 255px;
        text-align: center;
        padding: 2px 4px; /* Opcional: adicione um espaçamento interno para que o background não fique muito próximo ao texto */
        display: inline-block;
    }
`

export const AboutP = styled.p`
color: #fff;
font-size: 2.0rem;
margin-bottom: 2rem;

`

export const AboutBtnWrapper = styled.div`
    margin-top: 5px;
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