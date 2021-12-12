import React from 'react'
import styled from "styled-components";
import { mobile } from '../Responsive';
import { Link } from "react-router-dom";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5),
 rgba(255, 255, 255, 0.5)), 
 url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-board-games-adults-1585587217.jpg?crop=1.00xw:0.770xh;0,0.00750xh&resize=1200:*") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 20%;
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
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 8px;
`;


const Button = styled.button`
width: 30%;
border: none;
padding: 10px 8px;
background-color: #4e2dbb;
color: white;
cursor: pointer;
margin-bottom: 10px;

&:hover{
    background-color: grey;
}
`;

const A = styled.a`
margin: 5px 0;
font-size: 15px;
text-decoration: underline;
cursor: pointer;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input required placeholder="username" />
                    <Input required placeholder="password" />

                    <Button><StyledLink to="/">LOGIN</StyledLink></Button>
                    <A>Forgot Password?</A>
                    <A>Create A New Account</A>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;
