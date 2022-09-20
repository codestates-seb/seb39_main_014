import styled from "styled-components";

const FirstPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 95vh;
  position: relative;
  z-index: 1;

  .video-section {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .landing-video {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    opacity: 0.4;
  }
`;

export default FirstPageStyle;