import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: calc(100vh - 70px);
scroll-snap-align: start;
overflow: hidden;
`

const Left = styled.div`
flex: 1;
height: 100%;
width: 100%;
position: relative;
`

const LeftImg = styled.img`
width: 90%;
position: absolute;
bottom: 0;
`

const Right = styled.div`
flex: 1.2;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow: hidden;
`

const TitleWrapper = styled.div`
flex: 1;
width: 100%;
margin-top: 60px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

const TitleBig = styled.span`
font-size: 44px;
`

const Title = styled.span`
font-size: 30px;
margin-bottom: 10px;
`
const TitleLink = styled.a`
cursor: pointer;
color: gray;
transition: all 0.5s ease;

&:hover{
    color: crimson;
}
`

const SubTitle = styled.span`
font-size: 25px;
margin-bottom: 20px;

`

const BlogTopFrame = styled.div`
border-top: 25px solid lightgray;
border-radius: 10px 10px 0 0;
width: 94%;
`


const BlogWrapper = styled.div`
flex: 4;
width: 94%;

border: 4px solid lightgray;
/* border-top: 25px solid lightgray; */
/* border-radius: 10px 10px 0 0; */
border-bottom: none;
padding-top: 50px;
padding-right: 100px;
padding-left: 50px;
margin-right: 50px;
display: flex;
flex-direction: column;
background: #f1f1f1;
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
const BlogItem = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`

const BlogTitle = styled.span`
font-size: 28px;
margin-bottom: 5px;
`
const BlogSubTitle = styled.span`
font-size: 20px;
margin-left: 16px;
margin-bottom: 5px;

`
const BlogDesc = styled.p`
font-size: 16px;
margin-left: 16px;
margin-bottom: 5px;

`

const BlogLink = styled.a`
font-size: 14px;
margin-left: 16px;
color: gray;
font-weight: 400;
cursor: pointer;
color: crimson;
text-decoration: underline;
transition: all 0.5s ease;


&:hover{
    color: blue;
}
`



const Blog = ({closeMenu}) => {
    return (
        <Cont id="blog" onClick={closeMenu}>
            
                <Left>
                    <LeftImg src="./assets/dev-egg-bitch.svg"/>
                </Left>
                <Right> 
               
                     {/* When you read my writings, how do you imagine my face?
                           <br />
                           DO I have a writing bitch face?  */}
                    <Wrapper>
                        <TitleWrapper>
                            <TitleBig>To clear cache in my brain, </TitleBig> 
                            <Title>I'd occasionally write on <TitleLink>Medium.com</TitleLink></Title>
                            {/* <SubTitle>Below are the list of topics + it's links.</SubTitle> */}
                        </TitleWrapper>
                        <BlogTopFrame>                         
                        </BlogTopFrame>
                        <BlogWrapper>
                        <BlogItem>
                            <BlogTitle>4 ways to love a cat</BlogTitle>
                            <BlogSubTitle>Lorem ipsum dolor sit amet.</BlogSubTitle>
                            <BlogDesc>Lorem ipsum dolor sitdipisicing elit. Quas fugiat debitis deleniti? Nobis veritatis dolor cum, fugiat laborum itaque modi soluta illo debitis consequuntur distinctio, molestiae non aliquid ipsam libero corporis molestias. Velit, libero quae...
                            </BlogDesc>
                            <BlogLink>Read More...</BlogLink>
                        </BlogItem>
                        <BlogItem>
                            <BlogTitle>Say you won't let go</BlogTitle>
                            <BlogSubTitle>Lorem ipsum dolor sit amet.</BlogSubTitle>
                            <BlogDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat debitis deleniti?  laborum itaque modi soluta illo debitis consequuntur distinctio, molestiae non aliquid ipsam libero corporis molestias. Velit, libero quae...
                            </BlogDesc>
                            <BlogLink>Read More...</BlogLink>
                        </BlogItem>
                        <BlogItem>
                            <BlogTitle>Cookies and cream</BlogTitle>
                            <BlogSubTitle>Lorem ipsum dolor sit amet.</BlogSubTitle>
                            <BlogDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat debitis  molestiae non aliquid ipsam libero corporis molestias. Velit, libero quae...
                            </BlogDesc>
                            <BlogLink>Read More...</BlogLink>
                        </BlogItem>
                        <BlogItem>
                            <BlogTitle>Fried rice & omlete</BlogTitle>
                            <BlogSubTitle>Lorem ipsum dolor sit amet.</BlogSubTitle>
                            <BlogDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat debitis  molestiae non aliquid ipsam libero corporis molestias. Velit, libero quae...
                            </BlogDesc>
                            <BlogLink>Read More...</BlogLink>
                        </BlogItem>
                        <BlogItem>
                            <BlogTitle>Puppies are so cute</BlogTitle>
                            <BlogSubTitle>Lorem ipsum dolor sit amet.</BlogSubTitle>
                            <BlogDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat debitis  molestiae non aliquid ipsam libero corporis molestias. Velit, libero quae...
                            </BlogDesc>
                            <BlogLink>Read More...</BlogLink>
                        </BlogItem>
                        <BlogItem>
                            <BlogTitle>So are cats</BlogTitle>
                            <BlogSubTitle>Lorem ipsum dolor sit amet.</BlogSubTitle>
                            <BlogDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat debitis  molestiae non aliquid ipsam libero corporis molestias. Velit, libero quae...
                            </BlogDesc>
                            <BlogLink>Read More...</BlogLink>
                        </BlogItem>
                        <BlogItem>
                            <BlogTitle>So are cats</BlogTitle>
                            <BlogSubTitle>Lorem ipsum dolor sit amet.</BlogSubTitle>
                            <BlogDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat debitis  molestiae non aliquid ipsam libero corporis molestias. Velit, libero quae...
                            </BlogDesc>
                            <BlogLink>Read More...</BlogLink>
                        </BlogItem>
                        <BlogItem>
                            <BlogTitle>So are cats</BlogTitle>
                            <BlogSubTitle>Lorem ipsum dolor sit amet.</BlogSubTitle>
                            <BlogDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat debitis  molestiae non aliquid ipsam libero corporis molestias. Velit, libero quae...
                            </BlogDesc>
                            <BlogLink>Read More...</BlogLink>
                        </BlogItem>
                        </BlogWrapper>
                    </Wrapper>
               
                
                </Right>
            
            
            
        </Cont>
    )
}

export default Blog
