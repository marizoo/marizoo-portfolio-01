import React from 'react'
import styled from 'styled-components'


const Cont = styled.div`
flex: 1;
position: sticky;
bottom: 0;
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
                            <Answers>I learned from kind folks on youtube, udemy, freecodecamp, skillshare, etc.</Answers>
                        </DescItem>
                  
                        <DescItem>
                            <Questions>When did you started?</Questions>
                            <Answers>Officially, since June 2021</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>Do you like coding?</Questions>
                            <Answers>Dude... duh...</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>Why do you like coding?</Questions>
                            <Answers>I get "feel-good" hormonal releases from it:</Answers>
                            <Answers>- Endorphine high from killing bugs / finishing a project</Answers>
                            <Answers>- Dopamine dope from gaining new skills</Answers>
                            <Answers>- WHen I get to work in a team, I'll get Oxytocin release from working on common purpose</Answers>
                            <Answers>Best. Feeling. Ever!</Answers>

                        </DescItem>
                        
                        <DescItem>
                            <Questions>Any tech related experiences before this?</Questions>
                           <Answers>Back in Uni, I was a CAD tutor (autocad 2d & 3d).</Answers>
                           <Answers>Few years back, I made a wordpress websites.</Answers>
                           <Answers>in 2019, I joined the "Women in Tech" weekend bootcamp.</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>List your previous jobs?</Questions>
                           <Answers>Cad tutor</Answers>
                           <Answers>Junior Architect</Answers>
                           <Answers>Dive guide & marketing agent</Answers>
                           <Answers>Dive Instructor</Answers>
                           <Answers>Cruise Director</Answers>
                           <Answers>Dive center manager</Answers>
                           <Answers>Activity Manager</Answers>
                           <Answers>Activity guide + Yoga Teacher</Answers>
                        </DescItem>
                        
                        <DescItem>
                            <Questions>Is Web development right for you?</Questions>
                           <Answers>It's perfect for me</Answers>
                           <Answers>I love to learn + grow. Novelty excites me.</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>What parts of coding that you hate?</Questions>
                           <Answers>Sitting all day, my eye strain, and all those bugs</Answers>
                           <Answers>And I am where I am now from killing those bugs, so bring it bugs  ;-)</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>What are your fears?</Questions>
                           <Answers>Since I've been coding on my own, I wonder if I've developed some pet peeves for others</Answers>
                           <Answers>Like saying things in my head out loud. So please pardon my "french".</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>What is in the pipeline?</Questions>
                           <Answers>Depends what the work will need, I guess venturing to the back side, with MERN stack</Answers>
                           <Answers>But... Three.js looks pretty darn cool. So... </Answers>
                        </DescItem>
                        

                    </Desc>
                </LeftWrapper>
            </Left>
        </Cont>
    )
}

export default Sidebar
