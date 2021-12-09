import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #4e2dbb;
  color: white;
  text-shadow: 2px 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 40px;
  box-shadow: 0 4px 9px #3c3c3c;
`;

const Announcement = () => {
    return <Container>Super Deal! Free Shipping on Orders Over $10</Container>;
};

export default Announcement;