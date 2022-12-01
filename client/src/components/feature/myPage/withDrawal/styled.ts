import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 760px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  margin: 0 2rem;
  width: 20%;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 760px) {
    font-size: 0.8rem;
    padding: 1rem 0;
  }
  &.Withdrawal {
    color: ${({ theme }) => theme.colors.red[200]};
    background-color: ${({ theme }) => theme.colors.red[100]};
  }
`;
