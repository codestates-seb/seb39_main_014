import { createContext, useContext, useReducer } from "react";

/* 멘토링 변수명 명시적으로 작성하기
   boolean 변수일 경우 -> is
   token -> userName */

const StateContext = createContext({
  isLogin: false,
  token: undefined,
  isLoading: true,
});

const DispatchContext = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        token: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        token: null,
      };
    default:
      throw new Error(`정의되지않은 action : ${type}`);
  }
};

export const AuthProvider = ({ children }) => {
  const initalToken = localStorage.getItem("token");
  const [state, defaultDispatch] = useReducer(reducer, {
    token: initalToken,
    isLogin: initalToken ? true : false,
    isLoading: true,
  });

  //로그인 확인용
  console.log(state);

  const dispatch = (type, payload) => {
    defaultDispatch({ type, payload });
  };

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);
