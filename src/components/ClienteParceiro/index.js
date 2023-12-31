import React from 'react'
import { Slide } from "react-awesome-reveal";
import Icon1 from '../../images/clienteeparceiroexem.jpg'
import Icon2 from '../../images/clienteeparceiroexem.jpg'
import Icon3 from '../../images/clienteeparceiroexem.jpg'
import Video from '../../videos/clienteseparceirosbg.mp4'

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
} from './CpElements'

const ClienteParceiro = () => {

  return (
    <ServicesContainer id='discover'>

      <ServicesH1> Clientes & Parceiros</ServicesH1>
      <ServicesBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </ServicesBg>


      <ServicesWrapper>
      <Slide direction="left">
        <a href=""><ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2></ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard></a>
      </Slide>

      <Slide direction="up">
        <a href=""><ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2></ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard></a>
      </Slide>
        
      <Slide direction="right">
        <a href=""><ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2></ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard></a>
      </Slide>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default ClienteParceiro