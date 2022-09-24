import styled from "styled-components";

export const MypageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 90%;
  padding: 1rem 3rem;
  max-width: 1080px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const UserInfoWarpper = styled.div`
  display: flex;
  width: 100%;

  .Profile {
    display: flex;
    align-items: center;
    > img {
      width: 10rem;
      height: 10rem;
      padding: 1rem;
      border: 1px solid black;
      border-radius: 50%;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 1rem;
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .Nickname_career {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .Nickname {
      display: flex;
      > input {
        padding-left: 0.8rem;
        font-size: 1rem;
        border: 1px solid #c7c7c7;
        border-radius: 5px;
      }
    }

    > span {
      padding: 1rem;
      background-color: #e5f8ed;
      color: #009f47;
      border-radius: 10px;
    }
  }

  .Ranking {
    display: flex;
  }

  .Stack {
    display: flex;
    width: 100%;
    height: 100%;
    > input {
      padding-left: 0.8rem;
      font-size: 1rem;
      border: 1px solid #c7c7c7;
      border-radius: 5px;
    }
    > img {
      margin-left: 1rem;
    }
    .BsXCircle {
      display: flex;
      align-self: flex-start;
      font-size: 0.8rem;
      opacity: 0.8;
    }
  }

  .Label {
    display: flex;
    justify-content: center;
    width: 6rem;
    padding: 1rem 1rem;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-right: 1rem;
  }
`;
export const UserBoard = styled.div``;

export const BookmarkedBoard = styled.div``;
