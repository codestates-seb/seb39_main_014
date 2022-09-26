import styled from "styled-components";

export const MypageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 90%;
  padding: 0 3rem;
  max-width: 1080px;
  @media screen and (max-width: 760px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

export const UserInfoWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr 2fr 2fr;
  grid-template-rows: 0.5fr repeat(3, 1fr);
  width: 100%;
  gap: 1rem;
  grid-template-areas:
    "career career career career"
    "img nickname-label nickname ."
    "img activity-label activity ranking"
    "img stack-label submit-stack stack";
  @media screen and (max-width: 760px) {
    grid-template-columns: 1.5fr 0.8fr 1.5fr;
    grid-template-rows: repeat(5, 1fr);
    gap: 0.5rem;
    grid-template-areas:
      "career career career"
      "img nickname-label nickname"
      "img activity-label activity"
      "stack-label submit-stack submit-stack"
      "stack stack stack";
  }

  > label {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    background-color: #f0f0f0;
    border-radius: 5px;
    @media screen and (max-width: 415px) {
      font-size: 0.8rem;
    }
  }
  > input {
    width: 100%;
    border: 1px solid #c7c7c7;
    border-radius: 10px;
    padding: 1rem 0 1rem 0.5rem;
  }

  .Nickname-label {
    grid-area: nickname-label;
  }
  .Nickname {
    grid-area: nickname;
  }
  .Activity-label {
    grid-area: activity-label;
  }
  .Activity {
    grid-area: activity;
  }
  .Career {
    display: grid;
    grid-area: career;
    width: 100%;
    grid-column: 1 / span 4;
    @media screen and (max-width: 760px) {
      grid-column: 1 / span 3;
    }
    > p {
      display: flex;
      justify-self: right;
      justify-content: center;
      align-self: bottom;
      margin: 0;
      padding: 0.8rem;
      width: 20%;
      min-width: 130px;
      font-size: 0.8rem;
      color: #009f47;
      border-radius: 10px;
      background-color: #e5f8ed;
    }
  }

  .Stack-label {
    display: flex;
    grid-area: stack-label;
    @media screen and (max-width: 760px) {
      width: 80%;
    }
  }
  .Registration {
    grid-area: submit-stack;
  }
  .Stack {
    display: flex;
    grid-area: stack;
    @media screen and (max-width: 760px) {
      display: flex;
      align-self: flex-start;
    }
    .BsXCircle {
    }
  }
`;

export const Profile = styled.div`
  display: grid;
  grid-area: img;
  align-items: center;
  > img {
    width: 90%;
    height: 90%;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 50%;
    /* @media screen and (max-width: 824px) {
      width: 8rem;
      height: 8rem;
    } */
  }
`;

export const UserBoardWrapper = styled.div`
  display: flex;
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
      @media screen and (max-width: 760px) {
        font-size: 0.8rem;
        padding: 1rem 0;
      }
    }
  }
`;
