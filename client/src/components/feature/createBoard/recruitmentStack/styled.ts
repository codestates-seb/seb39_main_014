import styled from "styled-components";

export const RecruitmentStack = styled.div`
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
