import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

function PopStack() {
  const [popStack, setPopStack] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/popstack").then((res) => {
      console.log(res.data);
      setPopStack(res.data);
    });
  }, []);

  return (
    <PopStackFrame>
      <PopStackLayout>
        <Head>
          <h3 className="title"># 인기스택</h3>
          <div className="pop-question">?</div>
        </Head>
        <Content>
          {popStack.map((el) => (
            <div className="content" key={el.id}>
              <p className="rank-color">
                {el.id}. {el.name}
              </p>
              <p className="popstack-cnt">{el.time}</p>
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
  width: 150px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;

  .title {
    color: #69d06f;
    font-size: 25px;
  }

  .pop-question {
    text-align: center;
    margin-left: auto;
    border: 1px solid black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
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
  .popstack-cnt {
  }
`;

export default PopStack;
