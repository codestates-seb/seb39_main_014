import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterWraper>hi</FooterWraper>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #595959;
  display: flex;
  min-height: 6.5rem;
`;

const FooterWraper = styled.div``;
export default Footer;
