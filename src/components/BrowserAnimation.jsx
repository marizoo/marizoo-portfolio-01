import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
width: 360px;
height: 30vh;
margin: 20px 10px;
border: 2px solid lightgray;
border-radius: 10px 10px 0 0;
overflow: hidden;

&:hover Img{
    transform: translateY(-100%);
}
`
const Browser = styled.div`
height: 20px;
background-color: lightgray;
display: flex;
align-items: center;
position: sticky;
z-index: 2;
`

const Circle = styled.div`
width: 6px;
height: 6px;
border-radius: 50%;
margin: 3px;
background-color: white;


`

const Aa = styled.a``

const Img = styled.img`
width: 100%;
transition: all 6s ease;

`



const BrowserAnimation = () => {
    return (
        <Cont>
            <Browser>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
            </Browser>
            <Aa href="" target="_blank" rel="noreferrer">
                <Img src="./assets/portfolio-1.png" alt="portfolio1"/>
            </Aa>
        </Cont>
    )
}

export default BrowserAnimation
