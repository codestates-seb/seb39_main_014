import React from "react";
import styled from "styled-components";

const InputGroup = ({
  type = "text",
  placeholder = "",
  error,
  value,
  setValue,
}) => {
  return (
    <div>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <small> {error} </small> */}
      </div>
    </div>
  );
};

export default InputGroup;
