import React from 'react'
import styled, {keyframes} from 'styled-components'
import AnimatedShapes from '../components/AnimatedShapes'

const Cont = styled.div`
display: flex;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
position: relative;
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
background-color: #cccccc;
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

const TitleWarning = styled.p`
color: gray;
margin-top: 20px;
font-size: 16px;
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
animation: ${TextAnim} 6s ease-in-out infinite alternate;
`
const TBItem = styled.div`
font-size: 30px;
font-weight: 600;
color: crimson;
height: 50px;
`



const Home = ({closeMenu}) => {
    return (
        <Cont id="home" onClick={closeMenu}>
            <Left>
                <ImageCont>
                    <Circle>
                    <Image src="./assets/hello.svg"/>
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
                            <TBItem>Happy New Year!!!</TBItem>
                        </TBWrapper>
                    </TitleBottom>
                    {/* <TitleWarning>
                        WARNING! <br/>
                    This site contains too-much-information and corny-puns, <br/>
                excessive eye rolls may unconsciously occur.
                    </TitleWarning> */}
                </Wrapper>
            </Right>
        </Cont>
    )
}

export default Home
