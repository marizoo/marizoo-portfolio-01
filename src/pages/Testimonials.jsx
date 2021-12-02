import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightyellow;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
`

const Testimonials = () => {
    return (
        <Cont id="testimonials">
            Testimonials
        </Cont>
    )
}

export default Testimonials
