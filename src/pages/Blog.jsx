import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightseagreen;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
`

const Blog = () => {
    return (
        <Cont id="blog">
            Blog
        </Cont>
    )
}

export default Blog
