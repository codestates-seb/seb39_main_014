import axios from "axios";

/** 게시글 작성 POST API
 *  writeForm(URL, {모집 구분, 모임 방식, 기술 스택, 기간, 모집 분류/인원, 연락 방법, 제목. 내용})
 */

const handleBoardSubmit = async (
  WIRTEBOARD_URL,
  recruitCategory,
  recruitMethod,
  location,
  boardTechStacks,
  period,
  boardCareers,
  contact,
  title,
  contents,
  headers
) => {
  try {
    const res = await axios.post(
      WIRTEBOARD_URL,
      {
        recruitCategory: recruitCategory,
        recruitMethod: recruitMethod,
        location: location,
        boardTechStacks: boardTechStacks,
        period: period,
        boardCareers: boardCareers,
        contact: contact,
        title: title,
        contents: contents,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log("res :", res);
  } catch (error) {
    console.log("error :", error);
  }
};

export default handleBoardSubmit;
