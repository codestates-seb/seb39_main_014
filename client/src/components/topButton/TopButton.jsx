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
      <BsFillArrowUpCircleFill
        id="top"
        onClick={scrollToTop}
        type="button"
        className="topbutton"
      />
    </ScrollContainer>
  );
}

const ScrollContainer = styled.div`
  z-index: 1;
  display: flex;
  #top {
    /* display: none; */
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
    color: #333;
    cursor: pointer;
    width: 50px;
    height: 50px;

    font-weight: bold;
    font-size: 15px;
    color: green;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
  }

  #top:hover {
    color: green;
  }
`;

export default TopButton;
