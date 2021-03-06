import { GitHub, Mail, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import styled, {keyframes} from 'styled-components'

const Cont = styled.div`
height: 70px;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid rgba(0 ,0, 0, 0.2);
z-index: 6;
position: fixed;
bottom: 0;
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
const LogoCont = styled.div`
flex: 1;
display: flex;
flex-direction: row;
`

const Logo = styled.a`
color: inherit;
text-decoration: none;
margin-left: 30px;
font-size: 40px;
font-weight: 600;
transition: all .6s ease;
color: grey;

&:hover {
color: ${({theme}) => theme.colors.secondary};
}

&.active{
    color: white;
}
`

const dotAnim = keyframes`
0% {
    color: crimson;
    transform: translateX(0px);
}
40%{
    color: crimson;
    transform: translateX(15px);
}
50%{
    color: crimson;
    transform: translateX(15px);
}

100%{
    color: crimson;
    transform: translateX(15px);
}
`

const Dot = styled.div`
font-size: 40px;
animation: ${dotAnim} 5s alternate 3s infinite;
color: inherit;
`


const ContactCont = styled.div`
flex: 1.5;
display: flex;
justify-content: start;
`
const ContactItem = styled.a`
display: flex;
align-items: center;
margin-left: 30px;
cursor: pointer;
transition: all 0.5s ease;
color: gray;
text-decoration: none;

&:hover {
color: ${({theme}) => theme.colors.secondary};
}

&.active{
    color: white;
}
`


    

const ContactInfo = styled.span`
margin-left: 3px;
font-size: 16px;
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
                <LogoCont>      
                    <Logo className={menuOpen && "active"} href="#home">
                        Marizoo
                    </Logo>
                    <Dot>.</Dot> 
                        
                </LogoCont> 
                <ContactCont  >
                    <ContactItem className={menuOpen && "active"} href="https://twitter.com/_marizoo" target="_blank" rel="noreferrer">
                        <Twitter/>
                        <ContactInfo></ContactInfo>
                        
                    </ContactItem>
                    <ContactItem className={menuOpen && "active"} href="https://github.com/marizoo" target="_blank" rel="noreferrer">
                        <GitHub/>
                        <ContactInfo></ContactInfo>
                    </ContactItem>
                    <ContactItem className={menuOpen && "active"} href="https://youtube.com" target="_blank" rel="noreferrer">
                        <YouTube />
                        <ContactInfo></ContactInfo>
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
