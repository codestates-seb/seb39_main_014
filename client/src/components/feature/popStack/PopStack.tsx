import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../shared/Loading/Loading";

function PopStack() {
  const POPSTACK_URL = `${process.env.REACT_APP_API_URL}/board/popstack`;

  const queryPopStack = async () => {
    const res = await axios.get(POPSTACK_URL);
    return res.data;
  };

  const { data, isLoading } = useQuery(["popStack"], queryPopStack);

  if (isLoading) {
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
            <Loading />
          </Content>
        </PopStackLayout>
      </PopStackFrame>
    );
  }
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
          {data.map((el: string, idx: number) => (
            <div key={Object.keys(el)[0]} className="content">
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
  display: flex;
  justify-content: center;
  align-items: center;

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
  margin-bottom: 1.5rem;

  .title {
    color: #69d06f;
    font-size: 25px;
  }

  .pop-question {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    border: 1px solid black;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
  }

  .tooltip {
    display: inline-block;
    color: black;
  }

  .tooltip-text {
    text-align: left;
    position: absolute;
    background-color: #e9f7ed;
    padding: 10px;
    border-radius: 5px;
    color: green;
    border-radius: 0.5em;
    width: 12rem;
    height: 3rem;
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
  align-items: stretch;

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
