import styled from "styled-components";

const NavFrame = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;

  // 동적 ui
  @media screen and (max-width: 1170px) {
    transition: 0.8s all ease;
  }

  .logo {
    margin-left: 5rem;
    display: flex;
  }

  .left {
    display: flex;
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
