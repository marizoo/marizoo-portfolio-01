import React from 'react'
import styled, {keyframes} from 'styled-components'

const Cont = styled.div`
display: flex;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
`

const Left = styled.div`
flex: 1;
`
const ImageCont = styled.div`
width: 100%;
height: 100%;
position: relative;
overflow: hidden;
`

const Circle = styled.div`
width: 1100px;
height: 1100px;
border-radius: 50%;
background-color: crimson;
display: flex;
align-items: center;
justify-content: end;
position: absolute;
right: 5%;
`

const Image = styled.img`
width: 70%;
position: absolute;
right: 0;
`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: start;
align-items: center;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const TitleTop = styled.span`
font-size: 50px;
font-weight: 600;
`
const TitleMiddle = styled.span`
font-size: 100px;
font-weight: 700;
`

const TitleBottom = styled.div`
height: 35px;
overflow: hidden;
`

const TextAnim = keyframes`
50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(-100px);
  }
  /* 100% {
    transform: translateY(-150px);
  } */
  /* 100% {
    transform: translateY(-200px);
  } */
  
`

const TBWrapper = styled.div`
height: 100%;
animation: ${TextAnim} 8s ease-in-out infinite alternate;
`
const TBItem = styled.div`
font-size: 30px;
font-weight: 600;
color: crimson;
height: 50px;
`



const Home = () => {
    return (
        <Cont id="home">
            <Left>
                <ImageCont>
                    <Circle>
                    <Image src="./assets/man.png"/>
                    </Circle>
                </ImageCont>
            </Left>
            <Right>
                <Wrapper>
                    <TitleTop>Hi there, I'm</TitleTop>
                    <TitleMiddle>Marizoo</TitleMiddle>
                    <TitleBottom>
                        <TBWrapper>
                            <TBItem>Front-end Web Developer</TBItem>
                            <TBItem>Aspiring full-stack developer</TBItem>
                            <TBItem>i like corny puns</TBItem>
                        </TBWrapper>
                    </TitleBottom>
                </Wrapper>
            </Right>
        </Cont>
    )
}

export default Home
