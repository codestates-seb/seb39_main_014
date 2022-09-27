import { configureStore, combineReducers } from "@reduxjs/toolkit";

import 상태파일명 from "상태파일경로";

const rootReducer = combineReducers({
  상태이름: 상태파일명,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
