import React from 'react'
import styled from 'styled-components'
import BrowserAnimation from '../components/BrowserAnimation'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
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
