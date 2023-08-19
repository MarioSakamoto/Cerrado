import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import {
    ContatoContainer,
    ContatoWrap,
    ContatoLinksContainer,
    ContatoLinkItems,
    ContatoLinksWrapper,
    ContatoLinkTitle,
    ContatoLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebsiteRights,
    SocialIconLink
} from './ContatoElements'
import { animateScroll as scroll } from 'react-scroll'

// To link outside of the website, use normal a tags

const Contato = () => {

    // Function from react-scroll
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <ContatoContainer>
            <ContatoWrap>
                <ContatoLinksContainer>
                    <ContatoLinksWrapper>
                        <ContatoLinkItems>
                            <ContatoLinkTitle> About us </ContatoLinkTitle>
                            <ContatoLink to="/"> How it works </ContatoLink>
                            <ContatoLink to="/"> Testimonials </ContatoLink>
                            <ContatoLink to="/"> Careers </ContatoLink>
                            <ContatoLink to="/"> Investors </ContatoLink>
                            <ContatoLink to="/"> Terms of Service </ContatoLink>
                        </ContatoLinkItems>
                        <ContatoLinkItems>
                            <ContatoLinkTitle> Contact us </ContatoLinkTitle>
                            <ContatoLink to="/"> Contact </ContatoLink>
                            <ContatoLink to="/"> Support </ContatoLink>
                            <ContatoLink to="/"> Destinations </ContatoLink>
                            <ContatoLink to="/"> Sponsorships </ContatoLink>
                        </ContatoLinkItems>
                    </ContatoLinksWrapper>
                    <ContatoLinksWrapper>
                        <ContatoLinkItems>
                            <ContatoLinkTitle> Videos </ContatoLinkTitle>
                            <ContatoLink to="/"> Submit Video </ContatoLink>
                            <ContatoLink to="/"> Ambassadors </ContatoLink>
                            <ContatoLink to="/"> Agency </ContatoLink>
                            <ContatoLink to="/"> Influencers </ContatoLink>
                        </ContatoLinkItems>
                        <ContatoLinkItems>
                            <ContatoLinkTitle> Social Media </ContatoLinkTitle>
                            <ContatoLink to="/"> Instagram </ContatoLink>
                            <ContatoLink to="/"> Facebook </ContatoLink>
                            <ContatoLink to="/"> Youtube </ContatoLink>
                            <ContatoLink to="/"> Twitter </ContatoLink>
                        </ContatoLinkItems>
                    </ContatoLinksWrapper>
                </ContatoLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            VOLTAR AO INÍCIO
                        </SocialLogo>
                        <WebsiteRights> Cerrado © {new Date().getFullYear()} Todos os direitos reservados. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaWhatsapp />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </ContatoWrap>
        </ContatoContainer>
    )
}

export default Contato