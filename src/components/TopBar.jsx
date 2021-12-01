import { Mail, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
width: 100vw;
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
position: fixed;
top: 0;
transition: all 2s ease;
z-index: 2;

&.active{
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
}

`
const Left = styled.div`
flex: 1;
display: flex;
justify-content: space-space-between;
`
const Logo = styled.a`
flex: 1;
text-decoration: none;
cursor: pointer;
margin-left: 30px;
color: black;
font-size: 35px;
font-weight: 500;
transition: all .6s ease;

&:hover{
    color: ${({theme}) => theme.colors.secondary};
}

&.active{
    color: white;

    &:hover{
        color: ${({theme}) => theme.colors.secondary};
    }
}

span{
    color: white;
    animation: dot ease 6s alternate infinite;
}


@keyframes dot{
    100%{
        color: ${({theme}) => theme.colors.secondary};
        margin-left: 10px;
    }
}
`
const ContactCont = styled.div`
flex: 3;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const ContactItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
transition: all .6s ease;
&:hover{
    color: ${({theme}) => theme.colors.secondary};
}
`
const Item = styled.a`
margin-left: 5px;
cursor: pointer;
font-size: 12px;
`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`

const Hamburger = styled.div`
margin-right: 40px;
cursor: pointer;
width: 30px;
height: 25px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Line1 = styled.span`
width: 100%;
height: 3px;
background-color: black;
transform-origin: left;
transition: all 2s ease;
&.active{
   background-color: white;
   transform: rotate(45deg);
}
`
const Line2 = styled.span`
width: 100%;
height: 3px;
background-color: black;
transition: all 2s ease;
&.active{
   opacity: 0;
}
`

const Line3 = styled.span`
width: 100%;
height: 3px;
background-color: black;
transform-origin: left;
transition: all 2s ease;
&.active{
   background-color: white;
   transform: rotate(-45deg);
}
`
    

const TopBar = ({menuOpen, setMenuOpen}) => {
    return (
        <Cont className={menuOpen && "active"}>
            <Left>
                <Logo className={menuOpen && "active"} href="#home">
                    Mazoo<span>.</span>
                    </Logo>
                <ContactCont>
                    <ContactItem>
                        <Twitter/>
                        <Item >@_marizoo</Item>
                    </ContactItem>
                    <ContactItem>
                        <Mail/>
                        <Item>marizoo@meow.com</Item>
                    </ContactItem>
                </ContactCont>

            </Left>

            <Right>
                <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
                    <Line1 className={menuOpen && "active"}></Line1>
                    <Line2 className={menuOpen && "active"}></Line2>
                    <Line3 className={menuOpen && "active"}></Line3>
                </Hamburger>
            </Right>
        </Cont>
    )
}

export default TopBar
