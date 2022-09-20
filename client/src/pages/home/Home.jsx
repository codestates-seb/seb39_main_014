import React from "react";
import FirstPage from "./firstPage/FirstPage";
import SecondPage from "./secondPage/SecondPage";
import ThirdPage from "./thirdPage/ThirdPage";
import LastPage from "./lastPage/LastPage";

function Home() {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <LastPage />
    </div>
  );
}

export default Home;
