import { Facebook, Instagram, MailOutlined, PhoneAndroidOutlined, RoomOutlined, Twitter } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, mobiles } from '../Responsive';


const Container = styled.div`
display: flex;
${mobile({ display: "flex", flexDirection: "column" })}
${mobiles({ display: "flex", flexDirection: "column" })}
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;

const Description = styled.p`
margin: 10px 0;
`;

const SocialContainer = styled.div`
margin-top: 10px;
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
cursor: pointer;
`;


const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`;
const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
width: 50%;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color:black;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>B-GAME</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                    <ListItem><StyledLink to="/Cart">Cart</StyledLink></ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomOutlined style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <PhoneAndroidOutlined style={{ marginRight: "10px" }} /> +5 555 55 55
                </ContactItem>
                <ContactItem>
                    <MailOutlined style={{ marginRight: "10px" }} /> contact@Bgame.game
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;
