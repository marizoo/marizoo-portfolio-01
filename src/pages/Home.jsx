import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`

display: flex;
justify-content: center;
align-items: center;
background-color: pink;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
`

const Home = () => {
    return (
        <Cont id="home">
            Home
        </Cont>
    )
}

export default Home
