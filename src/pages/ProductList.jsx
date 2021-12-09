import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";


const Container = styled.div`

`;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 10px;
`;

const Select = styled.select`
padding: 5px;
margin-right: 10px;
`;

const Option = styled.option`

`;

const ProductList = () => {
    return (
        <Container id="ProductList">
            <Navbar />
            <Announcement />
            <Title>Board Games</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>
                            Category
                        </Option>
                        <Option>Adventure</Option>
                        <Option>Area Control</Option>
                        <Option>Card Game</Option>
                        <Option>Dice</Option>
                        <Option>Fantasy</Option>
                        <Option>Grid Movement</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Rating
                        </Option>
                        <Option>5</Option>
                        <Option>4</Option>
                        <Option>3</Option>
                        <Option>2</Option>
                        <Option>1</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Footer />
        </Container>
    )
}

export default ProductList;

