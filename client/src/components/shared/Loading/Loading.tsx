import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <LoadingFrame>
      <div className="loading_spinner_box">
        <div className="loading_spinner" />
      </div>
    </LoadingFrame>
  );
}

const LoadingFrame = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .loading_spinner_box {
    margin-left: 3px;

    .loading_spinner {
      width: 65px;
      height: 65px;
      border: 10px solid #e9f7ed;
      border-top: 10px solid green;
      border-radius: 50%;

      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;

      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export default Loading;
