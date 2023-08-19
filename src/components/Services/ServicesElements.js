import styled from 'styled-components';

export const ServicesContainer = styled.div`
    position: relative;
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 810px;
    

    @media screen and (max-width: 768px) {
        height: 1300px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.2) 0%,
                rgba(0, 0, 0, 0.6) 100%
            ),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: -1;
    }
`;

export const ServicesBg = styled.div`
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

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto; /* Center the wrapper horizontally */
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    text-decoration: none;
    z-index: 1;

    a {
        text-decoration: none;
      }

    @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10 20px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 260px;
    width: 160px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: linear-gradient(45deg, #fff, #65ab62);
    border: 8px solid #3b893f; /* Adicione a cor da borda desejada */
    transition: border-color 0.2s ease-in-out;
    

    &:hover {
    border-color: #65ab62; /* Mude a cor da borda no estado hover */
    }

    &:hover {
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
    }
`;

export const ServicesIcon = styled.img`
    
    height: 130px; /* Ajuste o tamanho do ícone conforme desejado */
    width: 143px;
    margin-bottom: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #65ab62;
    margin-bottom: 1rem;
    margin-top: 5rem;
    z-index: 2;
    position: absolute; /* Added position: absolute */
    top: 50px; /* Added a value for the top spacing */
    left: 50%; /* Center the heading horizontally */
    transform: translateX(-50%); /* Center the heading horizontally */
    padding: 0 30px;

    @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 1rem;
    }
    
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: black;
    font-size: 1.3rem; /* Ajuste o tamanho da fonte do título */
    font-weight: 700
`;



