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
flex: 1.5;
display: flex;
justify-content: center;
align-content: center;
`
const RightWrapper = styled.div`
width: 80%;
margin: 30px;
`

const RightTitle = styled.span`
font-size: 30px;
font-weight: 500;
`
const DescWrapper = styled.span`
display: flex;
flex-direction: column;
margin-top: 15px;
`

const DescTitle = styled.span`
font-size: 20px;
font-weight: 400;
`
const Desc = styled.span`
font-size: 20px;
font-weight: 400;
`

const IconsContainer = styled.div``
const Icon = styled.img``

const About = () => {
    return (
        <Cont id="about">
           
            <Right>
                <RightWrapper>
                    <RightTitle>My Tech Stack</RightTitle>
                    <DescWrapper>
                    <DescTitle>Hello! I'm a community taught developer,</DescTitle>
                    <Desc>I learned these stacks from kind folks on the internet.</Desc>
                    </DescWrapper>
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
            <Sidebar />
        </Cont>
    )
}

export default About
