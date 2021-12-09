import React, { useState } from 'react'
import { AddOutlined, Remove } from "@material-ui/icons";
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "grey" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover{
    background-color: grey;
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4e2dbb;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover{
    background-color: grey;
  }
`;

//---------------------------------------------------------
//incresment and decresment only for the products(games)

const StyledLink = styled(Link)`
  text-decoration: none;
  color:black;
`;

const Cart = () => {

  const [products, setProducts] = useState({
    count: 1
  });

  const handleChange = (e) => {
    setProducts({ count: e.target.value || 0 });
  };

  const decrease = (e) => {
    if (products.count <= 0) {
      return;
    }
    setProducts({ count: products.count - 1 });

  };

  //---------------------------------------------------------

  const [product, setProduct] = useState({
    count: 1
  });

  const handleChanges = (e) => {
    setProducts({ count: e.target.value || 0 });
  };

  const decreases = (e) => {
    if (product.count <= 0) {
      return;
    }
    setProduct({ count: product.count - 1 });
  };


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton><StyledLink to="/ProductList">Continue Shopping</StyledLink></TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopText>Tracking</TopText>
        </Top>
        <Bottom>

          <Info>
            <Product>
              <ProductDetail>
                <Image
                  src="https://www.naturalborngamers.it/wp-content/uploads/2017/09/Resident-Evil-2-The-Board-Game-1068108-1.jpg" />
                <Details>
                  <ProductName> <b>Product:</b> Resident Evil 2</ProductName>
                  <ProductName> <b>ID:</b> 93813718293</ProductName>

                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddOutlined onClick={() => setProducts({ count: products.count + 1 })} />
                  <ProductAmount onChange={handleChange} >{products.count}</ProductAmount>
                  <Remove onClick={decrease} />
                </ProductAmountContainer>
                <ProductPrice>$ 33</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://www.frugallivingnw.com/wp-content/uploads/adthrive/2019/04/Screenshot-2019-04-22-at-8.55.54-AM-480x490.png" />
                <Details>
                  <ProductName> <b>Product:</b> TrekKing</ProductName>
                  <ProductId> <b>ID:</b> 93822718944</ProductId>

                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddOutlined onClick={() => setProduct({ count: product.count + 1 })} />
                  <ProductAmount onChange={handleChanges} >{product.count}</ProductAmount>
                  <Remove onClick={decreases} />
                </ProductAmountContainer>
                <ProductPrice>$ 15</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 48</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 53.9</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart;