import React from "react";
import styled from "styled-components";

function InputGroup() {
  return (
    <InputLayout>
      <div>
        <input className="input-area" placeholder />
        <small> </small>
      </div>
    </InputLayout>
  );
}

const InputLayout = styled.div`
  margin-top: 5px;
  .input-area {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 48px;
    appearance: none;
    padding: 22px 12px 10px;
    min-width: 300px;
  }
`;

export default InputGroup;
