import React, { useState } from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
background-color: crimson;
`

const Title = styled.span`
font-size: 40px;
font-weight: 500;
`

const Cont1 = styled.div`
height: 80%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;

`

const Slider = styled.div`
width: 75%;
height: 100%;
display: flex;
position: absolute;
left: 0;
top: 0;
transition: all 1s ease-out;
`

const Item = styled.div`
width: 100%;
height: 100%;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
margin-left: 300px;
`

const ArrowLeftCont = styled.div`
height: 50px;
width: 50px;
cursor: pointer;
position: absolute;
left: 2.5%;
top: 45%;
z-index: 3;
`

const ArrowLeft = styled.img`
transform: rotate(180deg);
height: 100%;
width: 100%;
`
const ArrowRightCont = styled.div`
cursor: pointer;
height: 50px;
width: 50px;
position: absolute;
right: 2.5%;
top: 45%;
z-index: 3;
`

const ArrowRight = styled.img`
height: 100%;
width: 100%;
`

const ContInner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: pink; */
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

    const [currentSlide, setCurrentSlide] = useState(0);

    const testiData = [
        {
            id: "1",
            name: "Eva Green ONE",
            nameDesc: "Queen of the world",
            testimonial:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
            "https://images.pexels.com/photos/4126738/pexels-photo-4126738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
         },
        {
            id: "2",
            name: "Eva Green TWO",
            nameDesc: "Queen of the world",
            testimonial:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
            "https://images.pexels.com/photos/4126738/pexels-photo-4126738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
         },
        {
            id: "3",
            name: "Eva Green THREE",
            nameDesc: "Queen of the world",
            testimonial:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
            "https://images.pexels.com/photos/4126738/pexels-photo-4126738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
         },
        
        
        
    ]

    const handleClick = (way) => {
        way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < testiData.length -1 ? currentSlide + 1 : 0);
    }

    return (
        <Cont id="testimonials">
            <Title>Testimonials</Title>
            <Cont1>
            <ArrowLeftCont>
                <ArrowLeft src="./assets/arrow.png" alt="arrow left" onClick={() => handleClick("left")}/>
            </ArrowLeftCont>
            {/* <Slider> */}
            <Slider style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {testiData.map((testi) => (
                    <Item key={testi.id}>
                <ContInner >
                   <TestimonialCard >
                        <Image src={testi.img}/>
                        <Testimonial>{testi.testimonial}</Testimonial>
                        <NameCont>
                            <Name>{testi.name}</Name>
                            <NameDesc>{testi.nameDesc}</NameDesc>
                        </NameCont>
                    </TestimonialCard>
                   <TestimonialCard >
                        <Image src={testi.img}/>
                        <Testimonial>{testi.testimonial}</Testimonial>
                        <NameCont>
                            <Name>{testi.name}</Name>
                            <NameDesc>{testi.nameDesc}</NameDesc>
                        </NameCont>
                    </TestimonialCard>
                   <TestimonialCard >
                        <Image src={testi.img}/>
                        <Testimonial>{testi.testimonial}</Testimonial>
                        <NameCont>
                            <Name>{testi.name}</Name>
                            <NameDesc>{testi.nameDesc}</NameDesc>
                        </NameCont>
                    </TestimonialCard>
                   
                </ContInner>
               </Item>
            
            ))}
            </Slider>
            <ArrowRightCont>
                <ArrowRight src="./assets/arrow.png" alt="arrow right" onClick={() => handleClick()}/>
                </ArrowRightCont>
            </Cont1>
        </Cont>
    )
}

export default Testimonials
