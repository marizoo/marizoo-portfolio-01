import React from 'react'
import styled from 'styled-components'
import {FaHtml5, FaCss3Alt, FaGithub, FaReact, } from 'react-icons/fa'
import {SiJavascript, SiStyledcomponents } from 'react-icons/si'

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
width: 90%;
margin: 50px;
`

const RightTitle = styled.span`
font-size: 40px;
font-weight: 500;
margin-top: 20px;
`
const DescWrapper = styled.span`
display: flex;
flex-direction: column;
margin-top: 30px;
line-height: 30px;
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
const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 90%;
margin-top: 30px;
`
const ItemCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 30px;
line-height: 25px;
`
const Item = styled.li`
font-size: 70px;
color: #575757;
`
const ListDesc = styled.span`
font-size: 16px;
margin-top: 10px;
`

const Left = styled.div`
flex: 1.3;
display: flex;
justify-content: center;
align-items: center;
background-color: pink;
`
const LeftWrapper = styled.div``

const About = () => {
    return (
        <Cont id="about">
            <Right>
                <RightWrapper>
                    <RightTitle>My Tech Stack</RightTitle>
                    <DescWrapper>
                    <DescTitle>Here are the stacks I'm currently using in my projects</DescTitle>
                    <Desc></Desc>
                    </DescWrapper>
                        <IconsContainer>
                            <Ul>
                                <ItemCont>
                                <Item><FaHtml5/></Item>
                                <ListDesc>HTML 5</ListDesc>
                                </ItemCont>
                                <ItemCont>
                                <Item><FaCss3Alt/></Item>
                                <ListDesc>CSS 3</ListDesc>
                                </ItemCont>
                                <ItemCont>
                                <Item><SiJavascript/></Item>
                                <ListDesc>JavaScript</ListDesc>
                                </ItemCont>
                                <ItemCont>
                                <Item><FaGithub/></Item>
                                <ListDesc>Git & Github</ListDesc>
                                </ItemCont>
                                <ItemCont>
                                <Item><FaReact/></Item>
                                <ListDesc>React</ListDesc>
                                </ItemCont>
                                <ItemCont>
                                <Item><SiStyledcomponents/></Item>
                                <ListDesc>Styled Components</ListDesc>
                                </ItemCont>

                            </Ul>
                        </IconsContainer>
                </RightWrapper>
                
            </Right>
            <Left>
                <LeftWrapper>
                    hello world joke!!!
                </LeftWrapper>
            </Left>
        </Cont>
    )
}

export default About
