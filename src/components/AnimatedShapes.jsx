import React from 'react'
import styled from 'styled-components'




const Triangle = styled.div`
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
height: 100px;
width: 100px;
background-color: pink;
opacity: 0.5;
position: absolute;
top: -60px;
left: -60px;
animation: triangle 25s linear alternate infinite;
z-index: -1;

@keyframes triangle{
    100%{
    transform: translate(100vw, 100vh);
}
}
`
const Circle = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
position: absolute;
top: 200px;
left: -100px;
background-color: gray;
opacity: 0.5;
z-index: 1;
animation: circle 25s linear alternate infinite;

@keyframes circle{
    to {
        transform: translate(100vw, -100vh);
    }
}
`

const Rectangle = styled.div`
width: 50px;
height: 100px;
background-color: #667e99;
opacity: 0.5;
position: absolute;
top: 400px;
left: -50px;
z-index:-1;
animation: rect 25s linear alternate infinite;

@keyframes rect{
    to {
        transform: translate(100vw, -50vh);
    }
}
`

const AnimatedShapes = () => {
    return (
        <>
            <Triangle></Triangle>
                <Circle></Circle>
                <Rectangle></Rectangle>
        </>
    )
}

export default AnimatedShapes
