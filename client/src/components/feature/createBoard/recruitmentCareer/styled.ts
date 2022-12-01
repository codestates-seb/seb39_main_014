import styled from "styled-components";

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
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    padding-left: 1rem;
    border-radius: 10px;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.green[300]};
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
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 10px;
    > li {
      padding: 0.8rem 0 0.8rem 1rem;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.green[100]};
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
      color: ${({ theme }) => theme.colors.gray[400]};
      border: 1px solid ${({ theme }) => theme.colors.gray[400]};
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
      background-color: ${({ theme }) => theme.colors.green[100]};
      color: ${({ theme }) => theme.colors.green[400]};
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
    background-color: ${({ theme }) => theme.colors.red[100]};
    color: ${({ theme }) => theme.colors.red[300]};
  }
`;
