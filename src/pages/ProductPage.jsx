import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { AddOutlined, Remove } from "@material-ui/icons";
import { mobile } from "../Responsive";


const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
align-items: center;
${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "75%" })}
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
font-weight: 200;
`;

const Description = styled.p`
margin: 20px 0;
`;

const Price = styled.span`
font-weight: 100;
font-size: 60px;
`;

const AddContainer = styled.div`
width: 50%;
display: flex;
margin-top:20px;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}
`;

const AmountContainer= styled.div`
display: flex;
align-items: center;
font-weight: 700;
cursor: pointer;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border: 1px solid teal;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 8px;
`;

const Button = styled.button`
padding: 8px;
background-color: teal;
color: white;
border: 2px solid black;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: grey;
}
`;

const ProductPage = () => {
return (
<Container>
    <Navbar />
    <Announcement />
    <Wrapper>
        <ImgContainer>
                <Image src="https://manofmany.com/wp-content/uploads/2020/02/Best-board-games-Scythe.jpg" />
        </ImgContainer>
        <InfoContainer>
                <Title>Scythe</Title>
                <Description>What began as a wildly successful Kickstarter campaign became this wildly popular engine-building game,
                 which recently landed at #9 on BoardGameGeek’s list of the best board games. 
                 Like something out of a dystopian film, 
                 it takes place in a retro-futuristic alternate 1920s Europe. Using your wits, your resources, 
                 and your dieselpunk war machines, you must amass the most coins before the game ends.</Description>
            <Price>$ 20</Price>
            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <AddOutlined />
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
    </Wrapper>
    <Footer />
</Container>
)
}

export default ProductPage;