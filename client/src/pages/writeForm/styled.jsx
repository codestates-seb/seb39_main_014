import styled from "styled-components";

export const WriteFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1024px;
  padding: 1rem 3rem;
  label {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

/* Division */

export const FirstDivision = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 710px) {
    flex-direction: column;
  }
`;

export const FirstLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 0.5rem;
  .Check-box {
    display: flex;
    align-items: center;
    padding: 0.7rem 0 1.2rem 0;
    > input {
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.5rem 1rem 0.5rem 0.2rem;
      accent-color: green;
      cursor: pointer;
      @media screen and (max-width: 710px) {
        margin-left: 0;
      }
    }
    > label {
      font-weight: 400;
      font-size: 1.1rem;
      margin-right: 3rem;
    }
  }
`;

export const FirstRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0.5rem;
  .Check-box {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0.7rem 0rem 1.2rem 0;
    > input {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.5rem 1rem 0.5rem 0;
      cursor: pointer;
      &:checked {
        accent-color: green;
      }
    }
    .Location-box {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .Location-button {
      display: flex;
      align-items: center;

      width: 100%;
      border: 1px solid #a6a6a6;
      padding-left: 1rem;
      border-radius: 10px;

      &:hover {
        border: 1px solid #69d06f;
      }
      > button {
        width: 100%;
        height: 2.3rem;
        border: none;
        background-color: white;
        text-align: left;
        cursor: pointer;
      }
      .AiOutlineDown {
        cursor: pointer;
        margin-right: 0.5rem;
      }
    }
    .location {
      position: absolute;
      list-style: none;
      width: 100%;
      z-index: 3;
      background-color: white;
      left: 80px;
      margin: 0;
      padding: 0;
      border: 1px solid #a6a6a6;
      border-radius: 10px;
      @media screen and (max-width: 710px) {
        left: 0;
        top: 40px;
        height: 130px;
        overflow-y: auto;
      }
      > li {
        padding: 0.8rem 0 0.8rem 1rem;
        font-size: 0.8rem;
        cursor: pointer;
        &:hover {
          background-color: #e5f8ed;
          border-radius: 10px;
        }
      }
    }

    > label {
      font-weight: 400;
      font-size: 1.1rem;
      width: 4.5rem;
      @media screen and (max-width: 710px) {
        width: 4rem;
        margin-right: 1.8rem;
      }
    }
  }

  > select {
    margin: 0.5rem 0 1rem 0;
    height: 2.3rem;
    width: 40%;
  }
  @media screen and (max-width: 710px) {
    padding-left: 0;
  }
`;

export const SecondDivision = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  @media screen and (max-width: 710px) {
    flex-direction: column;
  }
`;

export const SecondLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding-right: 0.5rem;
  @media screen and (max-width: 710px) {
    padding-right: 0rem;
  }

  > div {
    margin: 1rem 0 0.5rem 0;
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #a6a6a6;
    padding-left: 1rem;
    border-radius: 10px;
    &:hover {
      border: 1px solid #69d06f;
    }
    > input {
      width: 100%;
      height: 2.3rem;
      border: none;
      background-color: white;
      text-align: left;
      outline: none;
      cursor: pointer;
    }
    .AiOutlineDown {
      cursor: pointer;
      margin-right: 0.5rem;
      &:active {
        transform: ratate(180);
      }
    }
  }

  .Stacklists {
    position: absolute;
    z-index: 4;
    list-style: none;
    width: 100%;
    height: 14rem;
    overflow-y: auto;
    top: 90px;
    margin: 0;
    padding: 0;
    background-color: white;
    border: 1px solid #a6a6a6;
    border-radius: 10px;
    &::-webkit-scrollbar {
      background-color: white;
      border-radius: 10px;
      border-left: 1px solid #a6a6a6;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c7c7c7;
      border-radius: 10px;
    }

    > li {
      padding: 0.8rem 0 0.8rem 1rem;
      cursor: pointer;
      &:hover {
        background-color: #e5f8ed;
        border-radius: 10px;
      }
    }
  }

  .Added-stack-list {
    display: flex;
    width: 100%;
    border: none;
    > div {
      display: flex;
      padding: 0.2rem;
      .Gox {
        cursor: pointer;
      }
    }
  }
`;

export const SecondRight = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  > div {
    margin: 1rem 0 0.5rem 0;
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #a6a6a6;
    padding-left: 1rem;
    border-radius: 10px;
    &:hover {
      border: 1px solid #69d06f;
    }
    > div {
      display: flex;
      align-items: center;
      width: 100%;
      height: 2.3rem;
      border: none;
      background-color: white;
      text-align: left;
      cursor: pointer;
    }
    .AiOutlineDown {
      cursor: pointer;
      margin-right: 0.5rem;
    }
  }
  .Periodlists {
    position: absolute;
    list-style: none;
    width: 100%;
    top: 90px;
    background-color: white;
    z-index: 3;
    margin: 0;
    padding: 0;
    border: 1px solid #a6a6a6;
    border-radius: 10px;
    > li {
      padding: 0.8rem 0 0.8rem 1rem;
      cursor: pointer;
      &:hover {
        background-color: #e5f8ed;
        border-radius: 10px;
      }
    }
  }

  @media screen and (max-width: 710px) {
    padding-left: 0;
  }
`;

/* 모집 분류 / 인원 */

export const Career = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5rem;
  .Select-option {
    width: 49%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .Career-select {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #a6a6a6;
    padding-left: 1rem;
    border-radius: 10px;
    &:hover {
      border: 1px solid #69d06f;
    }
    > button {
      width: 100%;
      height: 2.3rem;
      border: none;
      background-color: white;
      text-align: left;
      cursor: pointer;
    }
    .AiOutlineDown {
      cursor: pointer;
      margin-right: 0.5rem;
    }
  }

  .Careerlists {
    position: absolute;
    list-style: none;
    width: 100%;
    top: 50px;
    z-index: 3;
    margin: 0;
    padding: 0;
    background-color: white;
    border: 1px solid #a6a6a6;
    border-radius: 10px;
    > li {
      padding: 0.8rem 0 0.8rem 1rem;
      cursor: pointer;
      &:hover {
        background-color: #e5f8ed;
        border-radius: 10px;
      }
    }
  }

  .Bundle {
    display: flex;
    align-items: center;
    margin: 1rem 0 1rem 0;
    > ul {
      height: 2.3rem;
      width: 49%;
      padding-left: 0.5rem;
    }
  }
  .BundleButton {
    display: flex;
    align-items: center;

    .Count-div {
      width: 1rem;
      text-align: center;
      margin: 0 1rem;
    }
    .Count {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.8rem;
      height: 1.8rem;
      margin: 0 1rem;
      color: #595959;
      border: 1px solid #595959;
      border-radius: 50%;
      background-color: white;
      font-size: 1.5rem;
      cursor: pointer;
      &.plus {
        display: flex;
        margin-left: 0rem;
      }
      &.minus {
        padding-bottom: 0.3rem;
        margin-right: 0rem;
      }
    }
    .Add-Crew {
      width: 5rem;
      padding: 0.7rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #e5f8ed;
      color: #009f47;
    }
  }
`;

export const Crew = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
  width: 100%;
  > div {
    width: 49%;
    font-size: 0.9rem;
    font-weight: 400;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
  }
  > button {
    width: 5rem;
    margin-left: 1rem;
    padding: 0.7rem 1rem;
    height: 2.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #ffe3e4;
    color: #ff7d85;
  }
`;

/* 연락 방법 */

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    width: 49%;
    border: 1px solid #a6a6a6;
    border-radius: 10px;
    @media screen and (max-width: 710px) {
      width: 100%;
    }
    padding: 0.8rem 0 0.8rem 0.5rem;
    margin: 0.7rem 0 1rem 0;
    &::placeholder {
      padding-left: 0.5rem;
    }
    &:focus {
      padding-left: 0.5rem;
      &::placeholder {
        padding-left: 0;
      }
    }
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    width: 100%;
    padding: 0.8rem 0 0.8rem 0.5rem;
    border: 1px solid #a6a6a6;
    border-radius: 10px;
    margin: 0.7rem 0 1rem 0;
    &::placeholder {
      padding-left: 0.5rem;
    }
    &:focus {
      padding-left: 0.5rem;
      &::placeholder {
        padding-left: 0;
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    padding-bottom: 0.5rem;
  }
`;

export const PostButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;

  .Post {
    width: 15%;
    max-width: 110px;
    margin-left: 1rem;
    margin-bottom: 1rem;
    padding: 0.7rem 1rem;
    border-radius: 5px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    &.cancel {
      background-color: #e4e4e4;
    }

    &.complete {
      background-color: #e5f8ed;
      color: #009f47;
    }
  }
`;
