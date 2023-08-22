
import React from 'react';
import { Slide } from "react-awesome-reveal";
import Icon1 from '../../images/meioambientePort.jpg';
import Icon2 from '../../images/engenhariacivil.jpg';
import Icon3 from '../../images/saneamento.jpg';
import Icon4 from '../../images/automacao.jpg';
import Video from '../../videos/video2.mp4'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesBg,
  VideoBg,
} from './ServicesElements';

const Services = () => {
  return (

    <ServicesContainer id='services'>

      <ServicesH1> Portfólio </ServicesH1>

      <ServicesBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </ServicesBg>

      <ServicesWrapper>
        <Slide direction="left">
          <a href="MeioAmbienteDetail" className="custom-link">
            <ServicesCard>
              <ServicesIcon src={Icon1} />
              <ServicesH2></ServicesH2>
              <ServicesP>Meio Ambiente</ServicesP>
            </ServicesCard>
          </a>
        </Slide>
        <Slide direction="up">
          <a href="EngenhariaCivilDetail">
            <ServicesCard>
              <ServicesIcon src={Icon2} />
              <ServicesH2></ServicesH2>
              <ServicesP>Engenharia Civil</ServicesP>
            </ServicesCard>
          </a>
        </Slide>
          
        <Slide direction="down">
          <a href="SaneamentoDetail">
            <ServicesCard>
              <ServicesIcon src={Icon3} />
              <ServicesH2></ServicesH2>
              <ServicesP>Saneamento</ServicesP>
            </ServicesCard>
          </a>
        </Slide>
          
        <Slide direction="rigth">
          <a href="AutomacaoDetail">
            <ServicesCard>
              <ServicesIcon src={Icon4} />
              <ServicesH2></ServicesH2>
              <ServicesP>Automação</ServicesP>
            </ServicesCard>
          </a>
        </Slide>
      </ServicesWrapper>
    </ServicesContainer>

  );
};

export default Services;