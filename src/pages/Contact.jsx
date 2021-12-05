import React from 'react'
import styled from 'styled-components'
import ContactMe from '../components/ContactMe'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
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
width: 90%;
position: absolute;
bottom: -10px;
left: 40px;
`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`

export const Contact = ({closeMenu}) => {
    return (
        <Cont id="contact" onClick={closeMenu}>
            <Left>
                
                <ImgCont>
                    <Img src="./assets/dev-egg.svg" alt="the good egg"/>
                </ImgCont>
            </Left>
            <Right>
                <ContactMe />
            </Right>
        </Cont>
    )
}
