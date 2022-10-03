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
  .BiArrowBack {
    font-size: 2rem;
    color: #959595;
    cursor: pointer;
  }
  .Patch-delete {
    > button {
      background-color: white;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      margin-left: 0.5rem;
      padding: 0.5rem 0.6rem;
      cursor: pointer;
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
      border: 1px solid #d9d9d9;
      border-radius: 50%;
      @media screen and (max-width: 476px) {
        width: 2rem;
      }
    }

    > div {
      padding: 0 1rem;
      &:nth-child(2) {
        border-right: 1px solid #9d9d9d;
      }
      &:nth-child(3) {
        font-size: 0.8rem;
        color: #9d9d9d;
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
        font-size: 1.5rem;

        color: red;
      }
      > span {
        display: flex;
        justify-content: center;
        font-size: 0.4rem;
      }
    }
    .Recruitment-classification {
      margin-left: 0.5rem;
      padding: 0.5rem 0.5rem;
      border-radius: 10px;
      font-size: 0.8rem;
      color: #009f47;
      background-color: #e5f8ed;
    }
    > button {
      margin-left: 1rem;

      &:nth-child(3) {
        width: 3rem;
        height: 3rem;
        padding: 0;
        font-size: 0.7rem;
        border-radius: 50%;
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
  border-bottom: 1px solid #bababa;
  border-top: 1px solid #bababa;
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
    line-height: 2.5rem;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 476px) {
      line-height: 1.5rem;
    }
    .Subject {
      min-width: 4rem;
      color: #989898;
      margin-right: 2rem;
      @media screen and (max-width: 476px) {
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
    padding: 0 0.5rem;
    background-color: #e5f8ed;
    color: #009f47;
    border-radius: 5px;
    margin-right: 1rem;
    @media screen and (max-width: 476px) {
      margin-right: 0.5rem;
      padding: 0.2rem 0.4rem;
    }
  }
  .Contact-method {
    padding: 0 0.6rem;
    background-color: #f2f4f8;
    color: #4a5e75;
    border-radius: 5px;
    @media screen and (max-width: 476px) {
      padding: 0.2rem 0.4rem;
    }
  }

  .Applicants {
    display: flex;
    .Applicants-list {
      width: 100%;
      list-style: none;
      margin-top: 0.2rem;
      padding-left: 0;
      line-height: 2rem;
      @media screen and (max-width: 476px) {
        line-height: 1rem;
      }
      > li {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, auto));
        /* grid-template-columns: 2fr 1fr 1fr; */
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
          width: 3rem;
          height: 1.8rem;
          border: 1px solid #b1b1b1;
          border-radius: 3px;
          font-size: 0.8rem;
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
  color: #4b5563;
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
    > button {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      min-width: 3rem;
      width: 10%;
      border: none;
      border-radius: 5px;
      background-color: #e5f8ed;
      color: #009f47;
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
    border-top: 1px solid #b1b1b1;
  }
  .Comment-list {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #b1b1b1;
    > p {
      padding-left: 0.5rem;
    }
  }
  .Username {
    display: flex;
    width: 100%;
    > img {
      padding: 0.3rem;
      border: 1px solid #d9d9d9;
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
        color: #b1b1b1;
      }
    }
    > span {
      display: flex;
      justify-self: right;
      padding-top: 0.3rem;
      .RiDeleteBin5Line {
        cursor: pointer;
      }
    }
  }
`;
