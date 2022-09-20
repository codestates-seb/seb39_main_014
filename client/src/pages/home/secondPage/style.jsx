import styled from "styled-components";

const SecondPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 95vh;
  position: relative;
  z-index: 1;
  background-color: #e5ece7;

  h1 {
    min-width: 450px;
    font-size: 5rem;
  }

  .count {
    margin-top: 30px;
    color: green;
    font-weight: bold;
  }
  .hifive-img {
    width: 100%;
    height: 100%;
  }
`;

export default SecondPageStyle;
