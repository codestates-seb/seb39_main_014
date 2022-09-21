import styled from "styled-components";

export const WriteFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 95vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  padding: 1rem 3rem;
  label {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const FirstDivision = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 687px) {
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
      margin: 0 1rem 0 0.2rem;
      accent-color: green;
      cursor: pointer;
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
      margin: 0 1rem 0 0;
      cursor: pointer;
      &:checked {
        accent-color: green;
        /* accent-color: #69d06f; */
      }
    }

    > select {
      height: 1.5rem;
      width: 25%;
      margin-left: 2rem;
      padding-left: 0.5rem;
    }

    > label {
      font-weight: 400;
      font-size: 1.1rem;
      width: 4rem;
    }
  }

  > select {
    margin: 0.5rem 0 1rem 0;
    height: 2.3rem;
    width: 40%;
  }
  @media screen and (max-width: 687px) {
    padding-left: 0;
  }
`;

export const SecondDivision = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  @media screen and (max-width: 687px) {
    flex-direction: column;
  }
`;

export const SecondLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 0.5rem;
  @media screen and (max-width: 687px) {
    padding-right: 0rem;
  }
  > select {
    margin: 0.5rem 0 1rem 0;
    height: 2.3rem;
    width: 100%;
    padding-left: 0.5rem;
  }
`;

export const SecondRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0.5rem;
  > select {
    margin: 0.5rem 0 1rem 0;
    height: 2.3rem;
    width: 100%;
    padding-left: 0.5rem;
  }
  @media screen and (max-width: 687px) {
    padding-left: 0;
  }
`;

export const Career = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .Bundle {
    display: flex;
    align-items: center;
    margin: 0.5rem 0 1rem 0;
    > select {
      height: 2.3rem;
      width: 49%;
      padding-left: 0.5rem;
    }

    /* .Delete {
      background-color: #ffe3e4;
      color: #ff7d85;
    } */
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
      width: 2rem;
      height: 2rem;
      margin: 0 1rem;
      color: black;
      border: 1px solid black;
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

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    width: 49%;
    @media screen and (max-width: 687px) {
      width: 100%;
    }
    padding: 0.5rem 0;
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
    padding: 0.5rem 0;
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
`;
