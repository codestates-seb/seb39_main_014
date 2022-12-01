import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 710px) {
    flex-direction: column;
  }
`;

export const Category = styled.div`
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

export const Meeting = styled.div`
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
