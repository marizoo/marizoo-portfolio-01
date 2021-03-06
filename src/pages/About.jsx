import React from 'react'
import styled from 'styled-components'
import {FaHtml5, FaCss3Alt, FaGithub, FaReact, FaSass } from 'react-icons/fa'
import {SiJavascript, SiRedux, SiStyledcomponents, SiMaterialui, SiJest } from 'react-icons/si'

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
font-size: 40px;
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
`
const LeftWrapper = styled.div`
width: 80%;
height: 100%;
position: relative;
`
const Img = styled.img`
width: 75%;
position: absolute;
bottom: 0;
right: 30px;
`

const About = ({closeMenu}) => {
    return (
        <Cont id="about" onClick={closeMenu}>
            <Right>
                <RightWrapper>
                    <RightTitle>My Tech Stack</RightTitle>
                    {/* <DescWrapper> */}
                        {/* <DescTitle> Here are my current tech stacks:</DescTitle> */}
                    {/* <Desc></Desc> */}
                    {/* </DescWrapper> */}
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
                                <Item><SiRedux/></Item>
                                <ListDesc>Redux Toolkit</ListDesc>
                                </ItemCont>
                                <ItemCont>
                                <Item><SiJest/></Item>
                                <ListDesc>Jest</ListDesc>
                                </ItemCont>

                            </Ul>
                        </IconsContainer>
                    <DescWrapper>
                        <DescTitle> And for styling:</DescTitle>
                    <Desc></Desc>
                    </DescWrapper>
                        <IconsContainer>
                            <Ul>
                                <ItemCont>
                                <Item><FaSass/></Item>
                                <ListDesc>Sass</ListDesc>
                                </ItemCont>
                                <ItemCont>
                                <Item><SiStyledcomponents/></Item>
                                <ListDesc>Styled Components</ListDesc>
                                </ItemCont>
                                <ItemCont>
                                <Item><SiMaterialui/></Item>
                                <ListDesc>Material Ui</ListDesc>
                                </ItemCont>
                            </Ul>
                        </IconsContainer>
                </RightWrapper>
                
            </Right>
            <Left>
                <LeftWrapper>
                    <Img src="./assets/influencer.svg"/>
                </LeftWrapper>
            </Left>
        </Cont>
    )
}

export default About
