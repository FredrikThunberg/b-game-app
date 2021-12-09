import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";


const Container = styled.div`
flex: 1;
margin: 5px;
height: 70vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "30vh" })}
`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
color: white;
text-shadow: 2px 2px black;
margin-bottom: 20px;
`;


const StyledLink = styled(Link)`
border: none;
border-radius: 2px;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
text-decoration: none;

&:hover{
    
    background-color: grey;
    color: white;
}
`;

const Categoryitem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <StyledLink to="/ProductList">SHOP NOW</StyledLink>
            </Info>
        </Container>
    )
}

export default Categoryitem;
