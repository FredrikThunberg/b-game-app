import React from 'react'
import styled from "styled-components";
import { mobile } from '../Responsive';
import { Link } from "react-router-dom";



const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5),
 rgba(255, 255, 255, 0.5)), 
 url("https://listverse.com/wp-content/uploads/2019/12/monopoly-1200x720.jpg") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 15px 10px 0 0;
padding: 8px;
${mobile({ margin: "15px 10px 5px 0" })}
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 10px 8px;
background-color: #4e2dbb;
color: white;
cursor: pointer;

&:hover{
    background-color: grey;
}
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
`;


const Register = () => {



    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input required placeholder="name" />
                    <Input required placeholder="last name" />
                    <Input required placeholder="username" />
                    <Input required placeholder="email" />
                    <Input required placeholder="password" />
                    <Input required placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button><StyledLink to="/">Create</StyledLink></Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;
