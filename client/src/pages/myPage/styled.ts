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
  padding-top: 1.6rem;
  grid-template-columns: 2fr 1fr 2fr 2fr;
  grid-template-rows: auto repeat(3, 1fr);
  width: 100%;
  gap: 1rem;
  grid-template-areas:
    "career career career career"
    "img nickname-label nickname ."
    "img activity-label activity ranking"
    "img stack-label submit-stack stack";
  @media screen and (max-width: 760px) {
    grid-template-columns: 1.5fr 0.8fr 1.5fr;
    grid-template-rows: auto repeat(4, auto);
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
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    @media screen and (max-width: 415px) {
      font-size: 0.8rem;
    }
  }
  > input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
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
      min-width: 140px;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.green[400]};
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.green[100]};
      cursor: pointer;
    }
    .Career-level-lists {
      display: grid;
      grid-template-columns: 1fr 0.6fr;
      justify-self: right;
      position: relative;
      width: 20%;
      min-width: 140px;

      > ul {
        display: flex;
        align-items: center;
        position: absolute;
        justify-content: center;
        flex-direction: column;
        border: 1px solid ${({ theme }) => theme.colors.gray[300]};
        border-radius: 10px;
        padding: 0;
        top: -5px;
        background-color: white;
        .Career-list {
          width: 70%;
        }

        > li {
          display: flex;
          font-size: 0.7rem;
          justify-content: center;
          list-style: none;
          width: 100%;
          margin: 0;
          padding: 0.4rem 0.6rem;
          cursor: pointer;
          &:hover {
            border-radius: 10px;
            background-color: ${({ theme }) => theme.colors.green[100]};
          }
        }
      }
      .Career-list {
        width: 70%;
      }
      .Level-list {
        position: absolute;
        right: 0px;
        width: 30%;
      }
    }
  }

  .Stack-label {
    display: flex;
    grid-area: stack-label;
    @media screen and (max-width: 760px) {
      width: 80%;
    }
  }
  .Registration-box {
    grid-area: submit-stack;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 10px;
    padding: 1rem 0 1rem 0.5rem;
    > input {
      width: 100%;
      border: none;
      outline: none;
    }
    .AiOutlineDown {
      justify-self: right;
      margin-right: 1rem;
    }
  }
  .Stacklist {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 200px;
    right: 0px;
    top: 40px;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 10px;
    padding: 0;
    background-color: white;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      background-color: white;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.gray[200]};
      border-radius: 10px;
    }

    > li {
      padding: 0.3rem 0 0.3rem 0.5rem;
      list-style: none;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.green[100]};
        border-radius: 10px;
      }
    }
  }
  .Stack {
    display: flex;
    grid-area: stack;
    padding: 1rem 0;
    @media screen and (max-width: 760px) {
      display: flex;
      align-self: flex-start;
    }
    > div {
      display: flex;
    }
    .Gox {
      margin: 0 0.2rem;
      cursor: pointer;
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
  }
`;
