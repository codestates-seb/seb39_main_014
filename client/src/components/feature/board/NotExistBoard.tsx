import { Link } from "react-router-dom";
import styled from "styled-components";

function NotExistBoard() {
  const nickname = window.localStorage.getItem("nickname");
  return (
    <NotExistFrame>
      {nickname ? (
        <div>
          찾으시는 스터디 / 프로젝트가 없습니다
          <br />
          <br />
          <b>{nickname}</b> 님께서 직접 모집해보시겠어요?
        </div>
      ) : (
        <div>
          찾으시는 스터디 / 프로젝트가 없습니다
          <br />
          <br />
          직접 모집해보시겠어요?
        </div>
      )}
      <br />
      <StartSoopool to="/board/write">모집하기</StartSoopool>
    </NotExistFrame>
  );
}

const NotExistFrame = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 300px;
  align-items: center;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const StartSoopool = styled(Link)`
  display: flex;

  color: white;
  text-decoration: none;
  padding: 15px 30px 15px 30px;
  background-color: #66bd6c;
  border-radius: 40px;
  transition: 0.3s;

  &:hover {
    background-color: green;
    transition: 0.3s;
  }
`;
export default NotExistBoard;
