// import React, { useState } from "react";
// import styled from "styled-components";

// /*

// loginUser Component에서 DropDown bar button CLick시 rendering 되는 component로,
// 작성 글, 찜한 글, 로그아웃으로 구성되어 있습니다.

// 로그아웃의 경우 handleLogout을 통해 user를 초기화하는 과정을 진행하며
// API를 통해 refresh token을 초기화 합니다.

// */

// const Hambuger = () => {
//   const [isToggled, setIsToggled] = useState(false);
//   const [userToggled, setUserToggled] = useState(false);

//   return (
//     <Header isToggled={isToggled} userToggled={userToggled}>
//       {/* 햄버거 버튼(bar) */}
//       <div
//         className="toggle"
//         onClick={() => {
//           setIsToggled(!isToggled);
//         }}>
//         <div icon={!isToggled ? 1 : 2} />
//       </div>

//       {/* User 버튼 */}
//       <div
//         className="user"
//         onClick={() => {
//           setUserToggled(!userToggled);
//         }}>
//         <div icon={!userToggled ? 1 : 2} />
//       </div>

//       <ul className="header__right">
//         <li>로그인</li>
//         <li>작성하기</li>
//       </ul>
//     </Header>
//   );
// };

// const Header = styled.div`
//   max-width: 1280px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: white;
//   background-color: black;

//   .logo {
//     margin: 0 1rem;
//     font-size: 2rem;
//   }

//   .header__menulist {
//     list-style: none;
//     display: flex;
//   }

//   .header__left {
//     display: flex;
//   }

//   .header__right {
//     list-style: none;
//     display: flex;
//   }

//   .header__right div {
//     margin: 0 1rem;
//   }

//   li {
//     padding: 0 1rem;
//   }

//   .toggle {
//     display: none;
//     font-size: 1.5rem;
//     padding: 1rem 1rem;
//   }

//   .user {
//     display: none;
//     font-size: 1.5rem;
//     padding: 1rem 1rem;
//   }

//   @media screen and (max-width: 768px) {
//     flex-wrap: wrap;

//     .header__right {
//       display: ${(props) => (props.userToggled ? "flex" : "none")};
//       flex-direction: column;
//       width: 100%;
//       background-color: black;
//     }

//     .header__menulist {
//       display: ${(props) => (props.isToggled ? "flex" : "none")};
//       flex-direction: column;
//       width: 100%;
//       background-color: black;
//     }

//     .header__menulist li,
//     .header__right li {
//       margin: 1rem 0;
//       padding: 0;
//     }

//     .toggle {
//       display: block;
//     }

//     .user {
//       display: block;
//     }
//   }
// `;

// export default Hambuger;
