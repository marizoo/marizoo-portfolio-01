import { Mail, Twitter } from '@material-ui/icons'
import React from 'react'
import styled, {keyframes} from 'styled-components'

const Cont = styled.div`
height: 70px;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid rgba(0 ,0, 0, 0.2);
z-index: 2;
position: fixed;
top: 0;
transition: all 1s ease;

&.active{
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled.a`
flex: 1;
color: inherit;
text-decoration: none;
margin-left: 30px;
font-size: 40px;
font-weight: 700;
transition: all .6s ease;

&:hover {
color: ${({theme}) => theme.colors.secondary};
}

&.active{
    background-color: ${({theme}) => theme.colors.primary};
}
`

const dotAnim = keyframes`
0%{
    color: inherit;
}

100%{
    color: red;
    margin-left: 15px;
`
const Dot = styled.span`
animation: ${dotAnim} 6s alternate infinite;
`


const ContactCont = styled.div`
flex: 2;
display: flex;
justify-content: end;
`
const ContactItem = styled.div`
display: flex;
align-items: center;
margin-left: 16px;
cursor: pointer;
transition: all 0.5s ease;

&:hover {
color: ${({theme}) => theme.colors.secondary};
}
`
const ContactInfo = styled.span`
margin-left: 3px;
font-size: 12px;
text-decoration: none;
`


const Right = styled.div`
flex: 1;
display: flex;
justify-content: end;
`

const Hamburger = styled.div`
cursor: pointer;
margin-right: 35px;
width: 32px;
height: 25px;
display: flex;
flex-direction: column;
align-content: center;
justify-content: space-between;
`
const Line1 = styled.span`
width: 100%;
height: 3px;
background-color: black;
transition: all 1s ease;
transform-origin: left;

&.active{
transform: rotate(45deg);
background-color: white;
}
`
const Line2 = styled.span`
width: 100%;
height: 3px;
background-color: black;
transition: all 1s ease;

&.active{
 opacity: 0;
}
`

const Line3 = styled.span`
width: 100%;
height: 3px;
background-color: black;
transition: all 1s ease;
transform-origin: left;

&.active{
transform: rotate(-45deg);
background-color: white;

`

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <Cont className={menuOpen && "active"}>
            <Left>              
                    <Logo className={menuOpen && "active"} href="#intro">
                        Marizoo
                        <Dot>.</Dot>
                       
                    </Logo>
                
                <ContactCont>
                    <ContactItem>
                        <Twitter/>
                        <ContactInfo>@_marizoo</ContactInfo>
                    </ContactItem>
                    <ContactItem>
                        <Mail/>
                        <ContactInfo>marizoo@meow.com</ContactInfo>
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

export default Topbar
