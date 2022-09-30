import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function TopButton() {
  return (
    <ScrollContainer>
      <BsFillArrowUpCircleFill id="top" onClick={scrollToTop} type="button" />
    </ScrollContainer>
  );
}

const ScrollContainer = styled.div`
  z-index: 1;
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;
  position: relative;
  top: 1300px;

  #top {
    width: 50px;
    height: 50px;

    font-weight: bold;
    font-size: 15px;
    color: green;
    border-radius: 5px;
    cursor: pointer;
  }

  #top:hover {
    color: green;
  }
`;

export default TopButton;
