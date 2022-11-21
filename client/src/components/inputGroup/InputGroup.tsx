import React from 'react';
import styled from 'styled-components';

const InputGroup = ({
  type = 'text',
  placeholder = '',
  error,
  value,
  setValue,
  setErrors,
}) => {
  const resetInputClick = () => {
    setErrors('');
    setValue('');
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
            atuocomplete="off"
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
