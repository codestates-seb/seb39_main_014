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
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const ContentDivision = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .Check-box {
    display: flex;
    align-items: center;
    padding: 0.7rem 2rem 2rem 0;
    > input {
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 1rem 0 0.2rem;
    }
    > span {
      margin-right: 3rem;
    }
  }

  > select {
    margin: 0.5rem 0 1rem 0;
    height: 2.3rem;
    width: 90%;
    padding-left: 0.5rem;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .Check-box {
    display: flex;
    align-items: center;
    padding: 0.7rem 0rem 1.65rem 0;
    > input {
      width: 24px;
      height: 24px;
      margin: 0 1rem 0 0;
    }

    > select {
      height: 1.8rem;
      width: 20%;
      margin-left: 2rem;
      padding-left: 0.5rem;
    }

    > span {
      width: 4rem;
      margin-right: 2rem;
    }
  }

  > select {
    margin: 0.5rem 0 1rem 0;
    height: 2.3rem;
    width: 40%;
    padding-left: 0.5rem;
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
      width: 45%;
      padding-left: 0.5rem;
    }

    > div {
      margin: 0 2.5rem;
      letter-spacing: 0.5rem;
    }
    .Delete {
      background-color: #ffe3e4;
      color: #ff7d85;
    }
    > button {
      padding: 1rem 1.7rem;
      margin-right: 1rem;
      border: none;
      border-radius: 5px;
      background-color: #e5f8ed;
      color: #009f47;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    width: 45%;
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
