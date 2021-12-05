import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
`


const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
position: relative;
`

const Titles = styled.div`
z-index: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

const BigTitle = styled.span`
margin-top: 30px;
font-size: 100px;
font-weight: 700;
`

const MedTitle = styled.span`
font-size: 30px;
font-weight: 400;

`
const SmallTitle = styled.span`
font-size: 16px;
font-style: italic;
color: grey;
`

const Desc = styled.span`
font-size: 25px;
margin-top: 10px;
font-weight: 600;
letter-spacing: 1.5px;
color: #c06785;
`


const ImgWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: end;
align-items: center;
position: absolute;
bottom: -75px;
right: 0;
`
const Img = styled.img`
width: 70%;

`

const Intro = () => {
    return (
        <Cont id="intro">
            
                <Wrapper>
                {/* <Titles>
                <BigTitle>A faux pa</BigTitle>
                <MedTitle></MedTitle>
                <SmallTitle>Source: random world wide web</SmallTitle>
                <Desc>: Someone who likes to tell Dad jokes, <br/>
                but doesn't actually have children of his own.</Desc>
                </Titles> */}
                {/* <Titles>
                
                <SmallTitle>WARNING!</SmallTitle>
                <Desc>This site contains corny puns <br/>
                I won't be accountable for any offense or eye strain from your eye rolls.</Desc>
                </Titles> */}
                 <MedTitle>Hover for the answer</MedTitle>
                <ImgWrapper>
                    <Img src="./assets/dev-egg.svg"/>
                </ImgWrapper>
                </Wrapper>
          
        </Cont>
    )
}

export default Intro
