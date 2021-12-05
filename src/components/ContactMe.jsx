import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
flex: 10;
width: 100%;
height: 100%;
padding: 40px 50px;
`

const Form = styled.form``

const Title = styled.span`
font-size: 30px;
margin-bottom: 20px;
`

const ContInput = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
`
const Label = styled.label`
font-size: 18px;
margin-bottom: 5px;
`

const Input = styled.input`
width: 70%;
height: 40px;
padding: 15px;

`
const TextArea = styled.textarea`
width: 70%;
height: 200px;
padding: 15px;
`
const Button = styled.button`
width: 70%;
padding: 18px 0;
font-size: 16px;
`

const ContactMe = () => {

    const submitHandle = (e) => {
        e.preventDefault();
    }

    return (
        <Cont>
            <Form onSubmit={submitHandle}>
                <Title>Write your <del>jokes</del> messages below</Title>
                <ContInput>
                    <Label>Name</Label>
                    <Input placeholder="Your Name"></Input>
                </ContInput>
                <ContInput>
                    <Label>Message</Label>
                    <TextArea placeholder="Your Message"/>
                </ContInput>
                <Button>Send</Button>
            </Form>
        </Cont>
    )
}

export default ContactMe
