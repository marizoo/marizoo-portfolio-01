import React from 'react'
import styled from 'styled-components'


const Cont = styled.div`
flex: 1;
position: sticky;
top: 0;
overflow-y: scroll;

&::-webkit-scrollbar {
        width: 5px;
    }

&::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px grey; 
        border-radius: 10px;
    }
&::-webkit-scrollbar-thumb {
        background: rgb(7, 7, 7); 
        border-radius: 10px;
    }
&::-webkit-scrollbar-thumb:hover {
        background: #009eb3; 
    }
`

const Left = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-content: center;
`

const LeftWrapper = styled.div`
margin: 20px;
flex-wrap: wrap;
`

const LeftTitle = styled.span`
font-size: 25px;
font-weight: 500;
`
const Desc = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: start;
margin: 10px;

`
const DescItem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: start;
margin: 10px 0;
`

const Questions = styled.span`
font-weight: 500;
color: #747474;

`

const Answers = styled.span`
margin-left: 20px;
`


const Sidebar = () => {
    return (
        <Cont>
            <Left>
                <LeftWrapper>
                    <LeftTitle>My Tech FAQ</LeftTitle>
                    <Desc> 
                        <DescItem>
                            <Questions>What are you?</Questions>
                            <Answers>A community taught developer.</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>What is that?</Questions>
                            <Answers>I learned from sites like youtube, udemy, freecodecamp, etc.</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>When did you started?</Questions>
                            <Answers>Officially, since June 2021</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>Do you love coding?</Questions>
                            <Answers>Dude... duh...</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>Why do you like it?</Questions>
                            <Answers>Few reasons, one of them is...</Answers>
                            <Answers>Do you know the 'high' feeling you get, <br />
                            when you've reached a mountain top?</Answers>
                            <Answers>(hoping you nod...) <br/>
                            Yeah I get the same high when I killed a bug or finished a project.</Answers>
                            <Answers>Best. Feeling. Ever!</Answers>

                        </DescItem>
                        <DescItem>
                            <Questions>Why do you like it?</Questions>
                           <Answers>Best. Feeling. Ever!</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>Any tech related experiences before this?</Questions>
                           <Answers>I was a CAD tutor (autocad 2d & 3d) back in my university days.</Answers>
                           <Answers>I made a wordpress website, for myself.</Answers>
                           <Answers>in 2019, I joined the "Women in Tech" weekend bootcamp, and our team won. Woop woop!</Answers>
                           <Answers>Nothing much else, I mostly worked in remote areas with very little to no internet</Answers>
                        </DescItem>
                        

                    </Desc>
                </LeftWrapper>
            </Left>
        </Cont>
    )
}

export default Sidebar
