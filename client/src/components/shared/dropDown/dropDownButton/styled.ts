import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  padding-left: 1rem;
  border-radius: 10px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.green[300]};
  }
  .AiOutlineDown {
    cursor: pointer;
    margin-right: 0.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2.3rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: left;
  cursor: pointer;
`;
