import styled from "styled-components";

export const Period = styled.div`
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
