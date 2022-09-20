import React from "react";
import styled from "styled-components";

function LastPage() {
  <LastContainer>
    <ContentWraper>
      <ContentLeft>
        <img
          className="People"
          alt="persons"
          src="/assets/landing/People.svg"
        />
      </ContentLeft>
      <ContentRight>ho</ContentRight>
    </ContentWraper>
  </LastContainer>;
}

const LastContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 10;
  background-color: red;
`;

const ContentWraper = styled.section``;

const ContentLeft = styled.div``;

const ContentRight = styled.div``;

export default LastPage;
