import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightsteelblue;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
`

export const Contact = () => {
    return (
        <Cont id="#contact">
            Contact
        </Cont>
    )
}
