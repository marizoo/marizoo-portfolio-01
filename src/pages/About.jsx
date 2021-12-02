import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

const Cont = styled.div`
display: flex;
background-color: white;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
overflow: hidden;
`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-content: center;
`
const RightWrapper = styled.div`
width: 80%;
`

const RightTitle = styled.span`
font-size: 20px;
font-weight: 500;
`

const IconsContainer = styled.div``
const Icon = styled.img``

const About = () => {
    return (
        <Cont id="about">
            <Sidebar />
            <Right>
                <RightWrapper>
                    <RightTitle>My Tech Stack</RightTitle>
                        <IconsContainer>
                            <Icon/>
                            <ul>
                                <li>mostly worked with:</li>
                                <li>html | css</li>
                                <li>javascript</li>
                                <li>React + styled components</li>
                                <li>git + github</li>
                                <li>...</li>

                                <li>familiar with: sass, material ui, chakra ui</li>
                            </ul>
                        </IconsContainer>
                </RightWrapper>
            </Right>
           
        </Cont>
    )
}

export default About
