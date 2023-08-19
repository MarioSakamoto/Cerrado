import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import ceramicacarmelitana from "../images/ceramicacarmelitana.jpg";

const Cliente3 = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Container id="Cliente3">
      <Slide direction="right">
        <Profile>
          <ImageWrapper>
            <img src={ceramicacarmelitana} alt="profile" />
          </ImageWrapper>
          <Button onClick={handleGoBack}>Voltar</Button>
        </Profile>
      </Slide>
    </Container>
  );
};

export default Cliente3;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  width: 100%;
  height: 100vh;
  background-color: #fff;

  @media (max-width: 640px) {
    padding-top: 2rem;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;  
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;

  img {
    width: 60%;
    max-width: 100%;

    @media (max-width: 640px) {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3b893f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
      filter: drop-shadow(0px 0px 0px #3b893f);
      cursor: pointer;
      :hover {
        filter: drop-shadow(2px 6px 9px #fff);
        color: #fff
      }

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
