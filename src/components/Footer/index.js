import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillLinkedin, AiOutlineArrowUp, AiOutlineInstagram } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === ''  || email === ""){
      alert("Digite seu nome e seu email!");
      return;
    }
    alert("teste")
  }

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1 className='green'>Contato</h1>
        </Slide>

        <div className="links">
          <Slide direction="left">
            <h1>Telefone e Email:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+4733378901">+55 (34) 988569396</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:miladamiri@gmail.com">cerrado@cerradosolucoes.com</a>
            </Slide>
          </div>
        </div>

        <div className="address">
          <Slide direction="left">
            <h1>Endereço:</h1>
            <span>
              <FaMapMarkerAlt />
            </span>
          </Slide>
          <Slide>
            <a href="https://www.google.com.br/maps/place/Monte+Carmelo,+MG,+38500-000/@-18.7280572,-47.5386977,13z/data=!3m1!4b1!4m6!3m5!1s0x94a5888df01b5d05:0xa8bbd08a26757201!8m2!3d-18.7269616!4d-47.4956501!16s%2Fg%2F11bxfwtw8b?entry=ttu">Monte Carmelo-MG</a>
          </Slide>
        </div>

        <div className="profiles">
          <Slide direction="left">
            <h1>Minhas redes</h1>
          </Slide>
          <div className="icons">

            <Zoom>
              <span>
                <a href="https://www.linkedin.com/company/cerrado-engenharia-e-solu%C3%A7%C3%B5es-ambientais/about/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.instagram.com/cerradosolucoesmg/">
                  <AiOutlineInstagram />
                </a>
              </span>
            </Zoom>
            
            <Zoom>
              <span>
                <a href="https://wa.me/5534988569396">
                  <FaWhatsapp />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      
      <Form>
        <Slide direction="right">

          <form className="form" onSubmit={sendEmail}>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Nome e sobrenome..." 
                onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Seu email..."
                onChange={(e)=> setEmail(e.target.value)}  value ={email}></input>
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Digite a mensagem aqui..."
                onChange={(e) => setName(e.target.value)} value={message}></textarea>
            </div>
            <button>Enviar</button>
          </form>
        </Slide>
      </Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-bottom: 0rem;
  position: center;
  padding: 8rem 3rem;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 800px;
  align-items: center;
  background: linear-gradient(45deg, #fff, #65ab62);
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    height: 100%;
  }
`;
const Profile = styled.div`
  flex: 1;
  
  .address {
    h1 {
      padding: 1rem 0;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      a {
        text-decoration: none;
        color: #000;
        :hover {
          color: orange;
        }
      }
    }
  }

  .links {
    h1 {
      padding: 1rem 0;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      a {
        text-decoration: none;
        color: #000;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
      
    }

    .icons {
      display: flex;
      align-items: center;
      

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: #3b893f;
        }

        a {
          font-size: 1.5rem;
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #3b893f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  border-radius: 4px;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    margin-button: 2rem;
    background: linear-gradient(45deg, #3b893f, #65ab62);
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid black;
      border-radius: 5px;
      margin-bottom: 0.5rem;
      input,
      textarea {
        heigth: 2rem;
        width: 100%;
        resize: none;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
        ::placeholder {
          color: #000;
          opacity: 0.5;
        }
      }
      span {
        background-color: #fff;
        width: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
      }
      .messageIcon {
        align-items: center;
        padding-top: 0.5rem;
        border-radius: 5px;
      }
    }

      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 2.5rem;
        background-color: #fff;
        border: 1px solid black;
        border-radius: 5px;
        filter: drop-shadow(0px 0px 0px #fff);
        cursor: pointer;
        :hover {
          filter: drop-shadow(2px 6px 9px #fff);
          color: #000
        }
        
      }
    }
  `;
