import React from 'react'
import { IoIosHome } from 'react-icons/io';
import Video from '../../videos/video.mp4';
import LogoImage from '../../images/cerradoweb.jpeg';

import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    AboutBg,
    VideoBg
} from './SigninElements'

const SignIn = () => {
    return (
        <Container>
            <AboutBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' disablePictureInPicture/>
            </AboutBg>
            <FormWrap>
            
            <Icon to="/"> <IoIosHome /> </Icon>
                <FormContent>
                    <Form action="#">
                        
                        <FormH1> Acessar Conta </FormH1>
                        <FormLabel htmlFor='for'> Email </FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'> Senha </FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'> Entrar </FormButton>
                        
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn