import { createGlobalStyle } from "styled-components";
import Aveny from "./Aveny-T-WEB.woff";

export default createGlobalStyle`
  @font-face {
    font-family: "Aveny";
    src: url(${Aveny}) format("woff"),
      
  }
`;
