import styled from "styled-components";

export const InquiryContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1024px;
  padding: 1rem 0 3rem;
  @media screen and (max-width: 476px) {
    width: 100%;
    padding: 1rem 1rem 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  @media screen and (max-width: 476px) {
    margin-bottom: 0.5rem;
  }
  .BiArrowBack {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray[400]};
    cursor: pointer;
  }
  > p {
    margin: 0;
    padding-left: 0.5rem;
    font-size: 2rem;
    font-weight: 400;
    @media screen and (max-width: 476px) {
      font-size: 1rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-top: 1rem;
  .Patch-delete {
    > button {
      background-color: white;
      border: 1px solid ${({ theme }) => theme.colors.gray[200]};
      border-radius: 5px;
      margin-left: 0.5rem;
      padding: 0.5rem 0.6rem;
      cursor: pointer;
    }
  }
  .Recruitment-classification {
    display: flex;
    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.5rem;
      width: 5rem;
      height: 2.5rem;
      border-radius: 5px;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.green[400]};
      background-color: ${({ theme }) => theme.colors.green[100]};
    }
    > button {
      margin-left: 1rem;
      font-weight: 500;

      letter-spacing: 0.1rem;
      width: 5rem;
      height: 2.5rem;
      padding: 0;
      font-size: 1rem;
      border-radius: 5px;
      border: none;
    }
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  padding-left: 0.5rem;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 0.5rem;
  @media screen and (max-width: 487px) {
    padding: 0;
  }
  .User-info {
    display: flex;
    align-items: center;
    > img {
      padding: 0.3rem;
      border: 1px solid ${({ theme }) => theme.colors.gray[200]};
      border-radius: 50%;
      @media screen and (max-width: 476px) {
        width: 2rem;
      }
    }

    > div {
      padding: 0 1rem;
      &:nth-child(2) {
        border-right: 1px solid ${({ theme }) => theme.colors.gray[400]};
      }
      &:nth-child(3) {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.gray[400]};
      }
      @media screen and (max-width: 476px) {
        padding: 0 0.4rem;
        font-size: 0.5rem;
        &:nth-child(3) {
          font-size: 0.6rem;
        }
      }
    }
  }

  .Board-info {
    display: flex;
    align-items: center;
    .Bookmark {
      display: flex;
      flex-direction: column;
      .AiOutlineHeart {
        font-size: 2rem;
        cursor: pointer;
        &.full {
          color: red;
        }
      }
      > span {
        display: flex;
        justify-content: center;
        font-size: 0.8rem;
      }
    }
    .Recruitment-classification {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.5rem;
      width: 4rem;
      height: 3rem;
      border-radius: 5px;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.green[400]};
      background-color: ${({ theme }) => theme.colors.gray[200]};
    }
    > button {
      margin-left: 1rem;
      font-weight: 500;
      &:nth-child(3) {
        letter-spacing: 0.1rem;
        width: 4rem;
        height: 3rem;
        padding: 0;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
      }
    }
  }
`;

export const BoardInfo = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  /* grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr auto; */
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.gray[200]};
  border-top: 1.5px solid ${({ theme }) => theme.colors.gray[200]};
  list-style: none;
  padding: 1rem 0;
  margin: 0.5rem 0;
  @media screen and (max-width: 476px) {
    padding: 0.5rem 0;
    font-size: 0.2rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  > li {
    display: flex;
    width: 100%;
    line-height: 3rem;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 476px) {
      line-height: 1.5rem;
    }
    .Subject {
      width: 20%;
      font-size: 1.3rem;
      min-width: 4rem;
      color: ${({ theme }) => theme.colors.gray[400]};
      margin-right: 2rem;
      @media screen and (max-width: 476px) {
        font-size: 1rem;
        min-width: 4rem;
        color: ${({ theme }) => theme.colors.gray[400]};
        margin-right: 2rem;
        min-width: 2.5rem;
        margin-right: 1rem;
      }
    }
    .Stack {
      display: flex;
      align-items: center;
      padding-right: 0.5rem;
    }
  }
  .Span-box {
    border-radius: 5px;
    margin-right: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    @media screen and (max-width: 476px) {
      margin-right: 0.5rem;
      padding: 0.2rem 0.4rem;
    }
  }
  .Contact-method {
    padding: 0 0.6rem;
    background-color: ${({ theme }) => theme.colors.blue[100]};
    color: ${({ theme }) => theme.colors.blue[200]};
    border-radius: 5px;
    @media screen and (max-width: 476px) {
      padding: 0.2rem 0.4rem;
    }
  }

  .Applicants {
    display: flex;
    .Applicants-list {
      width: 70%;
      list-style: none;
      margin-top: 0.2rem;
      padding-left: 0;
      line-height: 2rem;
      @media screen and (max-width: 476px) {
        line-height: 1rem;
      }
      > li {
        width: 80%;
        display: grid;
        /* grid-template-columns: repeat(auto-fill, minmax(100px, auto)); */
        grid-template-columns: 1fr 0.6fr 1fr;
        @media screen and (max-width: 476px) {
          grid-template-columns: repeat(auto-fill, minmax(70px, auto));
        }
        > div {
          display: grid;
          align-items: center;
          @media screen and (max-width: 476px) {
            font-size: 0.6rem;
          }
        }
        .Apply-box {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          width: 80%;
          min-width: 5rem;
          height: 1.8rem;
          border: 1px solid ${({ theme }) => theme.colors.gray[300]};
          border-radius: 3px;
          font-size: 0.8rem;
          cursor: pointer;
          @media screen and (max-width: 476px) {
            width: 1.5rem;
            height: 1rem;
            font-size: 0.5rem;
          }
        }
      }
    }
  }
`;

export const Body = styled.span`
  padding: 1rem 0 1rem 0.6rem;
  min-height: 300px;
  color: ${({ theme }) => theme.colors.blue[400]};
  letter-spacing: 0.1rem;
  @media screen and (max-width: 476px) {
    font-size: 0.8rem;
  }
`;

export const WriteComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0.5rem 0.5rem;

  @media screen and (max-width: 476px) {
    font-size: 0.8rem;
  }
  > textarea {
    width: 100%;
    height: 4.5rem;
    margin: 0.5rem 0;
    padding: 0.3rem;
    resize: none;
  }
  .Submit {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.3rem;
    > button {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      min-width: 3rem;
      width: 10%;
      border: none;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.gray[200]};
      color: ${({ theme }) => theme.colors.green[400]};
      cursor: pointer;
    }
  }
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  width: 100%;
  @media screen and (max-width: 476px) {
    font-size: 0.8rem;
  }
  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }
  .Comment-list {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
    > p {
      padding-left: 0.5rem;
    }
    .Modify-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-top: 1rem;
      flex-direction: column;
      > textarea {
        display: flex;
        width: 100%;
        min-height: 80px;
        resize: none;
      }
      > div {
        display: flex;
        justify-content: flex-end;
        padding-top: 0.5rem;
        > button {
          display: flex;
          justify-content: center;
          padding: 0.5rem;
          min-width: 3rem;
          width: 10%;
          border: none;
          border-radius: 5px;
          background-color: ${({ theme }) => theme.colors.gray[200]};
          color: ${({ theme }) => theme.colors.green[400]};
          cursor: pointer;
        }
      }
    }
  }
  .Username {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .User-information {
      display: flex;

      > img {
        padding: 0.3rem;
        border: 1px solid ${({ theme }) => theme.colors.gray[200]};
        border-radius: 50%;
        @media screen and (max-width: 476px) {
          width: 2rem;
          padding: 0.2rem;
        }
      }
      > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-left: 0.3rem;
        .Createdat {
          font-size: 0.5rem;
          color: ${({ theme }) => theme.colors.gray[300]};
        }
      }
    }
    > span {
      display: flex;
      justify-self: right;
      align-items: center;
      padding-top: 0.3rem;
      .HiOutlinePencil {
        cursor: pointer;
      }
      .RiDeleteBin5Line {
        cursor: pointer;
        margin: 0 0.5rem;
      }
    }
  }
`;
