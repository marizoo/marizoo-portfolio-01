import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
height: 100vh;
width: 300px;
display: flex;
justify-content: center;
position: fixed;
right: -300px;
background-color: ${({theme}) => theme.colors.primary};
transition: all 1.6s ease;

&.active{
    right: 0;
}
`
const Ul = styled.ul`
list-style: none;
width: 80%;
margin-top: 100px;
`
const Li = styled.li`
margin-bottom: 35px;

`

const Aa = styled.a`
text-decoration: none;
color: white;
font-size: 20px;
transition: all 0.6s ease;
font-weight: 300;

&:hover{
    color: ${({theme}) => theme.colors.secondary};
}
`

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <Cont className={menuOpen && "active"}>
            <Ul>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="#home">Home</Aa>
                </Li>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="#about">About</Aa>
                </Li>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="#projects">Projects</Aa>
                </Li>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="#blog">Blog</Aa>
                </Li>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="#testimonials">Testimonials</Aa>
                </Li>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="#contact">Contact</Aa>
                </Li>
            </Ul>
        </Cont>
    )
}

export default Menu
