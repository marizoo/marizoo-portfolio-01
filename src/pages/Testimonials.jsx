import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
position: relative;
`
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const BigTitle = styled.div`
font-size: 40px;
`

const CardWrapper = styled.div`
width: 80%;
height: 80%;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const Card = styled.div`
width: 25%;
height: 80%;
padding: 30px;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: space-around; */
border-radius:10px;
box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.15);
z-index: 3;
transition: all 0.5s ease;
cursor: pointer;
&: hover{
    transform: scale(1.2);
}
`

const ImageCont = styled.div`
height: 20%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`

const Image = styled.img`
border-radius: 50%;
width: 100px;
height: 100px;
object-fit: cover;
`

const Name = styled.div`
font-size: 18px;
margin-bottom: 5px;
font-weight: 600;
color: crimson;
transition: all 0.5s ease;

&:hover{
    color: #ccc;
}
`

const Aa = styled.a`
text-decoration: none;
color: inherit;
cursor: pointer;

`

const Location = styled.div`
color: #616161;
margin-bottom: 20px;
`

const Desc = styled.div`
font-weight: 500;
margin-bottom: 10px;
`

const Testi = styled.div`
text-align: center;
`

const Testimonials = ({closeMenu}) => {
    return (
        <Cont id="testimonials" onClick={closeMenu}>
            <Wrapper>
                <BigTitle>Testimonials</BigTitle>
                <CardWrapper>
                    <Card>
                        <ImageCont>
                            <Image src="https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="sheryl crow"/>
                        </ImageCont>
                        <Name><Aa href="https://youtube.com" target="_blank" rel="noreferrer">Sheryl & ALison Crow</Aa></Name>
                        <Location>Alabama, USA.</Location>
                        <Desc>The Best Lady musician ever</Desc>
                        <Testi>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil archit nam, quos dolores veniam corrupti eaque nulla eum magnam dignissimos parro velit sit cum tempora pariatur, deleniti ea deserunt eius ducimus enim earum fuga, repellendus quis consequuntur impedit.</Testi>
                    </Card>
                    <Card>
                        <ImageCont>
                            <Image src="https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="sheryl crow"/>
                        </ImageCont>
                        <Name><Aa href="https://youtube.com" target="_blank" rel="noreferrer">Frankie Sullivan</Aa></Name>
                        <Location>Alabama, USA.</Location>
                        <Desc>The Best Lady musician ever</Desc>
                        <Testi>Lorem ipsum dolor sit it. Molestias nihil architecto, deserunt minus nemo suscipit cumque accusamus rerum numquam, nam, quos dolores veniam corrupti eaque nulla eum magnam dignissimos pariatur. Corrupti molestias porro velit sti ea deserunt eius ducimus euntur impedit.</Testi>
                    </Card>
                    <Card>
                        <ImageCont>
                            <Image src="https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="sheryl crow"/>
                        </ImageCont>
                        <Name><Aa href="https://youtube.com" target="_blank" rel="noreferrer">Sheryl Crow</Aa></Name>
                        <Location>Alabama, USA.</Location>
                        <Desc>The Best Lady musician ever</Desc>
                        <Testi>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil architecto, deserunt minus nemo suscipit cumque accusamus rerum numquam, nam, quos dolores veniam corrupti eaque nulla eum magnam dignissimos pariatur. Corrupti molestias porro velit sit cum tempora pariatur, d.</Testi>
                    </Card>
                   
                </CardWrapper>
            </Wrapper>
        </Cont>
    )
}

export default Testimonials
