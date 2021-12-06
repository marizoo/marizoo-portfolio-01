import React from 'react'
import styled from 'styled-components'
import BrowserAnimation from '../components/BrowserAnimation'

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
`
const TitleWrapper = styled.div`
height: 20%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.span`
font-size: 30px;
margin-bottom: 15px;
`

const Desc = styled.span`
font-size: 20px;
color: gray;
`

const Wrapper = styled.div`
width: 80%;
height: 80%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
`

const Portfolio = ({closeMenu}) => {
    return (
        <Cont id="portfolio" onClick={closeMenu}>
            <TitleWrapper>
                    <Title>Portfolio</Title>
                    <Desc>Hover to view the UI, then click in it to view the video description.</Desc>
            </TitleWrapper>
            <Wrapper>
            <BrowserAnimation />
            <BrowserAnimation />
            <BrowserAnimation />
            <BrowserAnimation />
            <BrowserAnimation />
            <BrowserAnimation />
            </Wrapper>
        </Cont>
    )
}

export default Portfolio
