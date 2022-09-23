import React, { useEffect } from "react";
import axios from "axios";

function board() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/board")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>board</div>;
}

export default board;
