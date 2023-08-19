import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}> Sobre </SidebarLink>
                <SidebarLink to="services" onClick={toggle}> Portfólio </SidebarLink>
                <SidebarLink to="discover" onClick={toggle}> Clientes & Parceiros </SidebarLink>
                <SidebarLink to="footer" onClick={toggle}> Contato </SidebarLink>
                
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin"> Fazer Login </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar