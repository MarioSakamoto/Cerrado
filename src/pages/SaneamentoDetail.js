import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import videoBackground from "../videos/saneamentobgdetail.mp4"
import { AiOutlineArrowLeft } from "react-icons/ai"; // Importe o ícone AiOutlineArrowLeft do pacote react-icons

const SaneamentoDetail = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Container id="SaneamentoDetail">
      <VideoBg autoPlay loop muted>
          <source src={videoBackground} type="video/mp4" />
      </VideoBg>

      <Profile>
        <BackIcon onClick={handleGoBack} />
        <Heading>Saneamento</Heading>
        
          <List>
            <Slide direction="left">
              <ServicesCard>
                <Item>Fase de projetos; </Item>
              </ServicesCard>
            </Slide>
            <Slide direction="up">
              <ServicesCard>
                <Item>Fase de instalação;</Item>
              </ServicesCard>
            </Slide>
            <Slide direction="left">
              <ServicesCard>
                <Item>Serviços contínuos;</Item>
              </ServicesCard>
            </Slide>
            <Slide direction="up">
              <ServicesCard>
                <Item>Assessoria de gerenciamento de resíduos;</Item>
              </ServicesCard>
            </Slide>
            <Slide direction="left">
              <ServicesCard>
                <Item>Orientação no entendimento e aplicação das normas ambientais;</Item>
              </ServicesCard>
            </Slide>
            <Slide direction="up">
              <ServicesCard>
                <Item>Treinamento de educação ambiental;</Item>
              </ServicesCard>
            </Slide>
            <Slide direction="left">
              <ServicesCard>
                <Item>Resposta técnica aos autos de inspeção e infração dos órgãos fiscalizadores;</Item>
              </ServicesCard>
            </Slide>
            <Slide direction="left">
              <ServicesCard>
                <Item>Orientação sobre recuperação de áreas degradadas;</Item>
              </ServicesCard>
            </Slide>
            <Slide direction="left">
              <ServicesCard>
                <Item>Análise de documentos;</Item>
              </ServicesCard>
            </Slide>
            <Slide direction="left">
              <ServicesCard>
                <Item>Assessoria na obtenção e renovação de licenciamento ambiental junto ao órgão competente, entre outros;</Item>
              </ServicesCard>
            </Slide>
            
          </List>

          <Slide direction="left">
              
                <Button onClick={handleGoBack}>Voltar</Button>
              
            </Slide>
          
        </Profile>
      
    </Container>
  );
};

export default SaneamentoDetail;


const VideoBg = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  width: 100%;
  height: 150vh;
  background-color: #transparent;

  @media (max-width: 480px) {
    padding-top: 2rem;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;  
`;

const Heading = styled.h1`
  font-size: 4rem;
  color: #3b893f;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.h3`
  font-size: 1rem; /* Tamanho da fonte ajustada */
  color: #fff;
  margin: 0; /* Remova o margin-bottom */
  text-align: center; /* Centralize o texto horizontalmente */
  width: 100%; /* Ocupar todo o espaço disponível horizontalmente */
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const BackIcon = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 2rem;
  left: -10rem;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
`;

const Button = styled.button`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0.5rem 5rem;
  
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: white;
  border: none;
  background-color: #F39540;
  border-radius: 10px;
  font-size: 1rem;
  filter: drop-shadow(0px 0px 0px #3b893f);
  cursor: pointer;
  
  @media (max-width: 640px) {
    margin-top: 0.5rem;
  }
  :hover {
    background-color: #3b893f;
  }

  a {
    font-size: 1.5rem;
    margin-top: 0.2rem;
    color: #fff;
  }
`;

const ServicesCard = styled.div`
  background: #3b893f;
  display: flex; /* Altere para flex para organizar os itens horizontalmente */
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px; 
  height: 1.5rem;
  max-width: 900px; /* Aumente o tamanho máximo para acomodar o conteúdo */
  padding: 15px; /* Reduza o padding para dar mais espaço interno */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
a {
    text-decoration: none;
}

&:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
}
@media (max-width: 480px) {
  margin-left: 10px; /* Add lateral spacing for smaller screens */
  margin-right: 10px;
  height: 5rem;
  
}
`;

