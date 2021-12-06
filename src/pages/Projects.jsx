import React, {useState} from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
background-color: crimson;
position: relative;
`

const Slider = styled.div`
height: 500px;
display: flex;
position: absolute;
left: 0;
transition: all 1s ease-out;
`

const Container = styled.div`
width: 100vw;
display: flex;
align-content: center;
justify-content: center;
`

const Item = styled.div`
width: 1000px;
height: 100%;
background-color: white;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid white;

`

const DescBox = styled.div`
flex: 4;
height: 90%;
display: flex;
align-items: center;
justify-content: center;
`

const DescCont = styled.div`
width: 90%;
height: 70%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const ImgCont = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: rgb(247, 188, 167);
display: flex;
align-items: center;
justify-content: center;
`

const DescImg = styled.img`
width: 25px;
`

const Title = styled.span`
font-size: 25px;
`

const Desc = styled.p`
font-size: 15px;
`
const TitleSmall = styled.span`
font-size: 12px;
font-weight: 600;
text-decoration: underline;
cursor: pointer;
`

const BoxScroll = styled.div`
margin-right: 15px;
background-color: #e1e2e4;
flex: 8;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* overflow: hidden; */
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
const BoxImg = styled.img`
width: 600px;
/* transform: rotate(-10deg); */
`

const ArrowLeft = styled.img`
height: 50px;
position: absolute;
cursor: pointer;
left: 60px;
transform: rotateY(180deg);
`
const ArrowRight = styled.img`
height: 50px;
position: absolute;
cursor: pointer;
right: 60px;
`


const Projects = ({closeMenu}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Featured Project #1",
          desc:
            "Lorematnimi beatae voluptatum dolore, corrupti, esse blanditiis culpa adipisci laboriosam aperiam! Laudantium quam itaque ea mollitia, excepturi velit magni! Labore nostrum sequi ipsam pariatur optio ipsa laudantium architecto aliquid maxime molestiae. Doloribus harum placeat deleniti voluptatem reprehenderit, suscipit voluptate debitis vero qui est. Laboriosam quia, rem amet maxime nostrum architecto!Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "./assets/screenshot-edge-sm.png",
        },
        //   img:
        //     "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        // },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Featured Project #2",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Featured Project #3",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

      const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

    return (
        <Cont id="projects" onClick={closeMenu}>
            <Slider
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <Container>
                        <Item>
                            
                            <BoxScroll>
                                <BoxImg alt="project image" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"/>
                                <BoxImg alt="project image" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"/>
                                <BoxImg alt="project image" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"/>
                                <BoxImg alt="project image" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"/>
                            </BoxScroll>
                            <DescBox>
                                <DescCont>
                                    <ImgCont>
                                        <DescImg src={d.icon} alt="icons"/>
                                    </ImgCont>
                                    <Title>{d.title}</Title>
                                    <Desc>{d.desc}</Desc>
                                    <TitleSmall>Projects</TitleSmall>
                                </DescCont>
                            </DescBox>
                        </Item>
                        </Container>
                ))}
            </Slider>
            <ArrowLeft src="./assets/arrow.png" onClick={() => handleClick("left")}/>
            <ArrowRight src="./assets/arrow.png" onClick={() => handleClick()} />

        </Cont>
    )
}

export default Projects
