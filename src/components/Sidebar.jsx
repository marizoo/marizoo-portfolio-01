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
                            <Questions>Any tech related experiences before this?</Questions>
                           <Answers>I was a CAD tutor (autocad 2d & 3d) back in my university days.</Answers>
                           <Answers>I made a wordpress website, for myself.</Answers>
                           <Answers>in 2019, I joined the "Women in Tech" weekend bootcamp, and our team won. Woop woop!</Answers>
                           <Answers>Nothing much else, I mostly worked in remote areas with very little to no internet</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>What was your previous job?</Questions>
                           <Answers>I worked as a junior architect in Malaysia after graduating from university. <br />
                           Then i switched to the service Industry, mainly in diving & recreation.<br/>
                           I was (still am) a dive instructor for 10 years + i just took a yoga teacher training in late 2019</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>Why web development now?</Questions>
                           <Answers>I always knew diving was not going to be my forever job</Answers>
                           <Answers>My goal was to travel + dive in the best dive location in Indonesia</Answers>
                           <Answers>did that! done that!</Answers>
                           <Answers>Tech has been an industry I'm interested in, especially coding, I love projects + building stuff</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>Do you think Web development is right for you?</Questions>
                           <Answers>It's perfect for me</Answers>
                           <Answers>I love to learn + grow. Novelty excites me: be it projects, people, team, bring it, let's do it. I'm in.</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>There must be parts that you hated?</Questions>
                           <Answers>Oh definitely!</Answers>
                           <Answers>Sitting all day, my eye strain, and all those bugs</Answers>
                           <Answers>But I've learned to move about in between.</Answers>
                           <Answers>And I am where I am now from killing those bugs, so bring it bugs  ;-)</Answers>
                        </DescItem>
                        

                    </Desc>
                </LeftWrapper>
            </Left>
        </Cont>
    )
}

export default Sidebar
