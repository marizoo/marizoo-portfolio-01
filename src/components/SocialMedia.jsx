import React from 'react'
import styled from 'styled-components'
import { Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons'
import { FaMedium } from 'react-icons/fa'


const TextBox = styled.div`
flex: 1;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
padding-top: 50px;
padding-left: 50px;
`
const TBTitle = styled.span`
font-size: 25px;
`
const TBTitle1 = styled.span`
font-size: 25px;
margin-bottom: 20px;
color: gray;
`
const TBContent = styled.div`
display: flex;
`
const IconBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 50px;
cursor: pointer;
transition: .4s all ease;
color: #494949;
&:hover{
    color: crimson;
}
`

const iconMui = {
    fontSize: "30px",
}

// const IconText = styled.span`
// font-size: 16px;

// `

const SocialMedia = () => {
    return (
        
            <TextBox>
                    <TBTitle>Connect with me,</TBTitle>
                    <TBTitle1>it's the best way to achieve nerd immunity.</TBTitle1>
                    <TBContent>
                        <IconBox>
                            <Twitter style={iconMui} />
                            {/* <IconText>@_marizoo</IconText> */}
                        </IconBox>
                        
                        <IconBox>
                            <YouTube style={iconMui} />
                            {/* <IconText>Mariza</IconText> */}
                        </IconBox>
                        <IconBox>
                            <FaMedium style={iconMui} />
                            {/* <IconText>Mariza</IconText> */}
                        </IconBox>
                        <IconBox>
                            {/* <Instagram style={iconMui} /> */}
                            {/* <IconText>scubayoga</IconText> */}
                        </IconBox>
                        <IconBox>
                            {/* <LinkedIn style={iconMui} /> */}
                            {/* <IconText>Mariza</IconText> */}
                        </IconBox>
                    </TBContent>
                </TextBox>
        
    )
}

export default SocialMedia
