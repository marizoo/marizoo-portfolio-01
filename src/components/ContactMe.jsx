import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';

const Cont = styled.div`
flex: 10;
width: 100%;
height: 100%;
padding: 40px 50px;
`

const Form = styled.form``

const Title = styled.span`
font-size: 30px;
`

const ContInput = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
margin-top: 20px;

`


const Input = styled.input`
width: 70%;
height: 40px;
padding: 15px;
font-size: 18px;
border-radius: 5px;
border: 1px solid rgba(0, 0, 0, 0.45);
&:focus{
    color: #e03356;
    outline: none;
}
`
const TextArea = styled.textarea`
width: 70%;
height: 200px;
padding: 15px;
font-size: 18px;
border-radius: 5px;
border: 1px solid rgba(0, 0, 0, 0.45);

&:focus{
    color: #e03356;
    outline: none;
}
`
const Button = styled.button`
width: 70%;
padding: 18px 0;
font-size: 18px;
font-weight: 500;
border-radius: 10px;
border: none;
transition: all .5s ease;
cursor: pointer;
margin-top: 10px;

&:hover{
    background-color: #e03356;
    color: white;
}
`

const Thanks = styled.span`
font-size: 18px;
margin-top: 10px;
color: gray;
font-weight: 500;
`

const ContactMe = () => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredSubject, setEnteredSubject] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const subjectChangeHandler = (event) => {
        setEnteredSubject(event.target.value);
    }
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    const messageChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    }

    const formRef = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w1mekpk', 'template_j8uhe5g', formRef.current, 'user_JlsGFEHZ4fmmoCLPZT0Mk')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true);
      }, (error) => {
          console.log(error.text);
      });

      setEnteredName('');
      setEnteredSubject('');
      setEnteredEmail('');
      setEnteredMessage('');
      
    }

    

    return (
        <Cont>
            <Form ref={formRef} onSubmit={sendEmail}>
                <Title>Send me a message </Title>
                <ContInput>
                    <Input type="text" required name="user_name" 
                    value={enteredName}
                    onChange={nameChangeHandler}
                    placeholder="Name"></Input>
                </ContInput>
                <ContInput>
                    <Input type="text" required name="user_subject" 
                    value={enteredSubject}
                    onChange={subjectChangeHandler}
                    placeholder="Subject"></Input>
                </ContInput>
                <ContInput>
                    <Input type="email" required name="user_email" 
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    placeholder="Email"></Input>
                </ContInput>
                <ContInput>
                    <TextArea placeholder="Message" 
                    value={enteredMessage}
                    onChange={messageChangeHandler}
                    required name="message"/>
                </ContInput>
                
                {!emailSent && <Button>Send</Button>}
                {emailSent && <Thanks>Thank You, I'll be in touch asap.</Thanks>}
            </Form>
        </Cont>
    )
}

export default ContactMe
