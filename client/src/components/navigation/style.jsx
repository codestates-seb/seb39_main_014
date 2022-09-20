import styled from "styled-components";

const NavFrame = styled.div`
  background: white;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  /* margin-top: 0.5rem;
  margin-bottom: 0.5rem; */

  @media screen and (max-width: 1170px) {
    transition: 0.8s all ease;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    height: 100%; // <Nav> height: 5rem;
    z-index: 1;
    width: 100%;
    padding: 10px 24px;
    max-width: 1170px;
  }

  .logo {
    height: 100%;
    cursor: pointer;
    justify-self: flex-start;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;

    div {
      margin-left: 40px;
    }
  }

  .right {
    display: flex;
    margin-right: 40px;
    div {
      margin-right: 40px;
    }
  }
`;

export default NavFrame;
