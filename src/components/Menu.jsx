import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
height: 100vw;
width: 300px;
z-index: 1;
background-color: ${({theme}) => theme.colors.primary};
color: white;
display: flex;
justify-content: center;
position: fixed;
transition: 1s all ease;
right: -300px;

&.active{
    right: 0;
}
`
const Ul = styled.ul`
list-style: none;
width: 80%;
height: 30%;
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
color: white;

`

const Li = styled.li`
transition: all .3s ease;
cursor: pointer;

&:hover{
    color: ${({theme}) => theme.colors.secondary};
}
`

const Aa = styled.a`
color: inherit;
text-decoration: none;
font-size: 20px;
font-weight: 300;
cursor: pointer;

`
    


const Menu = ({menuOpen, setMenuOpen}) => {

    const closeMenu = (e) => {
        setMenuOpen(false);
    }

    return (
        <Cont className={menuOpen && "active"}>
            <Ul>
                <Li onClick={closeMenu}>
                    <Aa href="#intro">Intro</Aa>
                </Li>
                <Li onClick={closeMenu}>
                    <Aa href="#home">Home</Aa>
                </Li>
                <Li onClick={closeMenu}>
                    <Aa href="#about">About</Aa>
                </Li>
                <Li onClick={closeMenu}>
                    <Aa href="#projects">Projects</Aa>
                </Li>
                <Li onClick={closeMenu}>
                    <Aa href="#blog">Blog</Aa>
                </Li>
                <Li onClick={closeMenu}>
                    <Aa href="#testimonials">Testimonials</Aa>
                </Li>
                <Li onClick={closeMenu}>
                    <Aa href="#contact">Contact</Aa>
                </Li>
            </Ul>
        </Cont>
    )
}

export default Menu
