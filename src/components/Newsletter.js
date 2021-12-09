import { Send } from '@material-ui/icons'
import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
height: 60vh;
background-color: #f5f5dc52;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center" })}
`;

const Form = styled.form`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({ width: "80%" })}
`;

const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: #4e2dbb;
color: white;
cursor: pointer;

&:hover{
background-color: grey;
}
`;



const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <Form>
                <Input required placeholder="Email..." />
                <Button type="submit">
                    <Send />
                </Button>
            </Form>

        </Container>


    )
}

export default Newsletter;