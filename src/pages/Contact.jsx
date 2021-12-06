import React from 'react'
import styled, {keyframes} from 'styled-components'
import AnimatedShapes from '../components/AnimatedShapes'
import ContactMe from '../components/ContactMe'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
position: relative;
`


const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100%;
width: 100%;
position: relative;
`


const ImgCont = styled.div`
width: auto;
height: auto;
`
const Img = styled.img`
width: 60%;
position: absolute;
bottom: 0px;
left: 80px;
`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
padding-top: 70px;
`

export const Contact = ({closeMenu}) => {
    return (
        <Cont id="contact" onClick={closeMenu}>
                <AnimatedShapes />
            <Left>
                
                <ImgCont>
                    <Img src="./assets/mailbox.svg" alt="the good egg"/>
                </ImgCont>
            </Left>
            <Right>
                <ContactMe />
            </Right>
        </Cont>
    )
}
