import React from "react";
import styled from "styled-components";

const Toggle = ({ isDone, setIsDone }) => {
  const handleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={handleDone} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </>
  );
};

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckBoxLabel = styled.label`
  top: 0;
  left: 0;
  width: 50px;
  height: 27px;
  border-radius: 15px;
  background: #4fbe79;
  display: flex;
  align-items: center;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 40px;
  height: 30px;
  &:checked + ${CheckBoxLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 27px;
      transition: 0.2s;
    }
  }
`;

export default Toggle;
