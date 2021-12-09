import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { AddOutlined, Remove } from "@material-ui/icons";
import { mobile, } from "../Responsive";
import { useState } from "react";




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

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
cursor: pointer;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border: 1px solid lightgrey;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 8px;
`;

const Button = styled.button`
padding: 8px;
background-color: #4e2dbb;
color: white;
border: 2px solid black;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: grey;
}
`;

const ProductPage = () => {

    //incresment and decresment
    const [products, setProducts] = useState({
        count: 0
    });

    const handleChange = (e) => {
        setProducts({ count: e.target.value || 0 }); //as long it has a value, then increase and decrease functions will work,

    };

    const decrease = (e) => {
        if (products.count <= 0) { // when it hits 0 it's a false statement and will stop decrease the value
            return;
        }
        setProducts({ count: products.count - 1 });
    };



    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/aa/AAA3GO4DLRM01626827205669.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>World of Warcraft: Wrath of the Lich King - A Pandemic System Board Game</Title>
                    <Description>In the Wrath of the Lich King board game, players control one of Azeroth’s
                        heroes and fight their way through the Scourge to reach the throne of fallen Prince
                        Arthas, now feared throughout Azeroth as the terrifying Lich King. Adventure across
                        the frozen continent of Northrend, take on quests, battle monstrous entities,
                        and more to retake Azeroth from the Lich King.</Description>
                    <Price>$ 59.99</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={decrease} />
                            <Amount onChange={handleChange} >{products.count}</Amount>
                            <AddOutlined onClick={() => setProducts({ count: products.count + 1 })} />
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