import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
`

const Title = styled.span`
font-size: 40px;
margin: 15px 0;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 80%;
`
const ArrowLeftCont = styled.div`
height: 80px;
width: 80px;
`

const ArrowLeft = styled.img`
background-color: grey;
transform: rotate(180deg);
height: 100%;
width: 100%;
`
const ArrowRightCont = styled.div`
height: 80px;
width: 80px;
`

const ArrowRight = styled.img`
background-color: grey;
height: 100%;
width: 100%;
`


const ContInner = styled.div`
display: flex;
`


const TestimonialCard = styled.div`
width: 250px;
height: 400px;
border-radius: 10px;
box-shadow: 0 0 15px -8px black;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 20px;
margin: 40px;
transition: all 1s ease;

&:hover{
    transform: scale(1.3);
}
`

const Image = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
object-fit: cover;
border: 1px solid rgba(255, 255, 255, 0.8);
`
const NameCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Name = styled.span`
font-size: 18px;
`
const NameDesc = styled.span`
color: crimson;

`
const Testimonial = styled.p`
text-align: center;
`

const Testimonials = () => {
    return (
        <Cont id="testimonials">
            <Title>Testimonials</Title>
            <Wrapper>
                <ArrowLeftCont>
                <ArrowLeft src="./assets/arrow.png"/>
                </ArrowLeftCont>
                <ContInner>
                <TestimonialCard>
                    <Image src="https://images.pexels.com/photos/4126738/pexels-photo-4126738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <NameCont>
                        <Name>Eva Green</Name>
                        <NameDesc>Queen of my heart</NameDesc>
                    </NameCont>
                    <Testimonial>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam suscipit, cupiditate nisi error id perferendis saepe impedit perspiciatis possimus quos quam! Impedit molestias ut odio iure eius corporis pariatur.</Testimonial>
                </TestimonialCard>
                <TestimonialCard>
                    <Image src="https://images.pexels.com/photos/4126738/pexels-photo-4126738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <NameCont>
                        <Name>Eva Green</Name>
                        <NameDesc>Queen of my heart</NameDesc>
                    </NameCont>
                    <Testimonial>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam suscipit, cupiditate nisi error id perferendis saepe impedit perspiciatis possimus quos quam! Impedit molestias ut odio iure eius corporis pariatur.</Testimonial>
                </TestimonialCard>
                <TestimonialCard>
                    <Image src="https://images.pexels.com/photos/4126738/pexels-photo-4126738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <NameCont>
                        <Name>Eva Green</Name>
                        <NameDesc>Queen of my heart</NameDesc>
                    </NameCont>
                    <Testimonial>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam suscipit, cupiditate nisi error id perferendis saepe impedit perspiciatis possimus quos quam! Impedit molestias ut odio iure eius corporis pariatur.</Testimonial>
                </TestimonialCard>
                </ContInner>
                <ArrowRightCont>
                <ArrowRight src="./assets/arrow.png"/>
                </ArrowRightCont>
            </Wrapper>
        </Cont>
    )
}

export default Testimonials
