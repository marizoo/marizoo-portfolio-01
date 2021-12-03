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

const Wrapper = styled.div`
width: 60%;
font-size: 20px
;
`

const Blog = () => {
    return (
        <Cont id="blog">
            <Wrapper>
            I was told that I have a resting bitch face only a lover would love.
When I am deep thinking, I was told to "chill". 
Dude... you chill, I can't help it when I look like I'm going to murder all the problems in my head.
Now, I am wondering if I have a writing bitch face. 
Like when you read my writings, do I sound like a bitch?
*please let me know...*
            </Wrapper>
            
        </Cont>
    )
}

export default Blog
