import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import getPopStack from "../../api/getPopStack";

function PopStack() {
  const POPSTACK_URL =
    "http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/popstack";
  const [popStack, setPopStack] = useState([]);

  useEffect(() => {
    getPopStack(POPSTACK_URL, setPopStack);
  }, []);

  return (
    <PopStackFrame>
      <PopStackLayout>
        <Head>
          <h3 className="title"># 인기스택</h3>
          <div className="pop-question">
            <span className="tooltip">
              ?
              <span className="tooltip-text">
                수풀에서 인기 있는 <br />
                기술 스택을 확인해보세요!
              </span>
            </span>
          </div>
        </Head>
        <Content>
          {popStack.map((el, idx) => (
            <div className="content">
              <p className="rank-color">
                {idx + 1}. {Object.keys(el)}
              </p>
              <p className="popstack-cnt">{Object.values(el)}</p>
            </div>
          ))}
        </Content>
      </PopStackLayout>
    </PopStackFrame>
  );
}

/** div - 인기 스택 프레임 */
const PopStackFrame = styled.div`
  width: 200px;
  height: 250px;

  position: relative;
  top: 210px;

  box-sizing: content-box;
  padding: 20px;

  box-shadow: rgba(149, 157, 165, 0.2) 1px 1px 6px 1px;

  border-radius: 25px;
  transition: 0.2s;
`;

const PopStackLayout = styled.div`
  width: 190px;
`;

const Head = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    color: #69d06f;
    font-size: 25px;
  }

  .pop-question {
    text-align: center;
    margin-left: auto;
    border: 1px solid black;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-size: 12px;
  }

  .tooltip {
    display: inline-block;
    color: black;
  }

  .tooltip-text {
    /* text-align: left;
    display: none;
    position: absolute;
    top: -25px;
    bottom: 0px;
    width: 120px;
    height: 55px;
    border: 1px black solid;
    border-radius: 5px;
    padding: 5px;
    font-size: 15px;
    background-color: white;
    color: black;
    z-index: 999; */
    text-align: left;
    position: absolute;
    background-color: #e9f7ed;
    /* border: 1px black solid; */
    padding: 10px;
    border-radius: 5px;
    color: green;
    border-radius: 0.5em;
    width: 125px;
    height: 30px;
    display: none;
    left: 70px;
    top: -15px;
    bottom: 0px;
    z-index: 999;
  }

  .tooltip:hover .tooltip-text {
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: row;
    height: 30px;
    justify-content: space-between;
  }

  .rank-color {
    color: #606060;
  }
`;

export default PopStack;
