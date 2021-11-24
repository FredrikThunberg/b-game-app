import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: teal;
  color: white;
  text-shadow: 2px 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Announcement = () => {
    return <Container>Super Deal! Free Shipping on Orders Over $10</Container>;
};

export default Announcement;