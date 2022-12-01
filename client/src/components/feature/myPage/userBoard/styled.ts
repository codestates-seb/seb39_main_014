import styled from "styled-components";

export const UserBoardWrapper = styled.div`
  display: flex;
  padding-top: 4rem;
`;

export const UserBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 760px) {
    font-size: 0.8rem;
  }

  > div {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }
  .Myboard {
    > div {
      padding: 1rem;
      cursor: pointer;
    }
    .Bookmark {
      background-color: #f0f0f0;
      border-radius: 5px;
    }
  }

  .Checkboard {
    width: 100%;
    border-bottom: 1px solid #c2c2c2;
    > input {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 1rem;
    }
    > div {
      cursor: pointer;
    }
  }
  .Select-all {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
      > input {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
      }
    }
    > button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      background-color: #f0f0f0;
      cursor: pointer;
    }
  }
  .Modification {
    display: flex;
    justify-content: center;

    .Withdrawal {
      color: #ff7d85;
      background-color: #ffe3e4;
    }
    > button {
      display: flex;
      justify-content: center;
      padding: 1rem;
      font-size: 1.2rem;
      border-radius: 10px;
      margin: 0 2rem;
      width: 20%;
      border: none;
      cursor: pointer;
      @media screen and (max-width: 760px) {
        font-size: 0.8rem;
        padding: 1rem 0;
      }
    }
  }
`;
