import React from 'react'
import styled from 'styled-components'


const Cont = styled.div`
background-color: #ebebeb;
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
font-weight: 900;
color: #747474;
margin-bottom: 2px;
font-size: 16px;
`

const Answers = styled.span`
margin-left: 20px;
margin-top: 5px;
`


const Sidebar = () => {
    return (
        <Cont>
            <Left>
                <LeftWrapper>
                    <LeftTitle>FAQ's.</LeftTitle>
                    <Desc> 
                       
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
                            <Answers>- Endorphine high from killing bugs / finishing a project.</Answers>
                            <Answers>- Dopamine dope from gaining new skills & having a meaningful purpose.</Answers>
                            <Answers>- I'll get Oxytocin release from working in a team.</Answers>
                            <Answers>Best. Feelings. Ever!</Answers>

                        </DescItem>
                        
                        <DescItem>
                            <Questions>Do you have any tech related experiences before this?</Questions>
                           <Answers>I was a CAD tutor (autocad 2d & 3d),</Answers>
                           <Answers>then I made a wordpress websites.</Answers>
                           <Answers>In 2019, I joined the "Women in Tech" weekend bootcamp.</Answers>
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
                            <Questions>What do you hate about coding?</Questions>
                           <Answers>Sitting all day, my eye strain, and all those bugs.</Answers>
                           <Answers>I actually made those bugs.. noob errors.</Answers>
                        </DescItem>
                        
                        <DescItem>
                            <Questions>What are your fears?</Questions>
                           <Answers>Since I've been coding on my own, I wonder if I've developed some <br/> 
                           pet peeves for others.</Answers>
                           <Answers>Like thinking out loud.. and, do pardon my "french".</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>What is in the pipeline?</Questions>
                           <Answers>Depends what the project will need, <br/> 
                           but I guess venturing to the back side, with MERN stack.</Answers>
                           <Answers>But... Three.js looks pretty darn cool. So... </Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>Describe yourself.</Questions>
                           <Answers>I'm not a shy intovert, quite a hippie, a flexitarian and I need a quiet space to focus at work & to rest.<br/> 
                           </Answers>
                           <Answers>Did you know Oprah Winfrey and Simon Sinek are introverts too? </Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>What do you do for fun?</Questions>
                          <Answers>Outdoor Sports: <del>wall</del> tennis, diving, etc.</Answers>
                          <Answers>Busking, <del>reading</del> browsing books / music.</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>What is your deal breaker?</Questions>
                          <Answers>Anything to do with clubbing and techno / house/  <br/>
                          heavymetal / dangdut music / bts / blackpink / K-pop. Yuck...</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>What is your deal maker?</Questions>
                          <Answers>Cool vibes, kind & passionate peeps. <br/>
                          Good taste in music, ditch social media & connect the old school way.</Answers>
                        </DescItem>
                        <DescItem>
                            <Questions>Any last words?</Questions>
                          <Answers>Yes. I'm a huge ally for the lgbtq community & I'm against bullying.</Answers>
                          <Answers> So be kind, live and let live.</Answers>
                        </DescItem>
                        

                    </Desc>
                </LeftWrapper>
            </Left>
        </Cont>
    )
}

export default Sidebar
