import React from "react";
import styled from "styled-components";

interface InputGroupProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  setValue: (str: string) => void;
  setErrors: (str: string) => void;
}

const InputGroup = ({
  type = "text",
  placeholder = "",
  error,
  value,
  setValue,
  setErrors,
}: InputGroupProps) => {
  const resetInputClick = () => {
    setErrors("");
    setValue("");
  };
  return (
    <InputLayout>
      <div>
        <div>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
            onClick={resetInputClick}
            className="input"
          />
          <small> {error} </small>
        </div>
      </div>
    </InputLayout>
  );
};

const InputLayout = styled.div`
  input {
    margin-top: 15px;
    height: 50px;
    border-radius: 5px;
  }
`;

export default InputGroup;
