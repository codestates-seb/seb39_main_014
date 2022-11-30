import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ItemUList = styled.ul`
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
`;

export const ItemList = styled.li`
  padding: 0.8rem 0 0.8rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green[100]};
    border-radius: 10px;
  }
`;
