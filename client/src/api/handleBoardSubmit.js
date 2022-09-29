import axios from "axios";

/** 게시글 작성 POST API
 *  writeForm(URL, {모집 구분, 모임 방식, 기술 스택, 기간, 모집 분류/인원, 연락 방법, 제목. 내용})
 */

const handleBoardSubmit = async (
  WIRTEBOARD_URL,
  recruitCategory,
  recruitMethod,
  location,
  techStacks,
  period,
  careers,
  boardCareers,
  contact,
  title,
  contents
) => {
  try {
    const res = await axios.post(WIRTEBOARD_URL, {
      recruitCategory: recruitCategory,
      recruitMethod: recruitMethod,
      location: location,
      techStacks: techStacks,
      period: period,
      careers: careers,
      boardCareers: boardCareers,
      contact: contact,
      title: title,
      contents: contents,
    });
    console.log("res :", res);
  } catch (error) {
    console.log("error :", error);
  }
};

export default handleBoardSubmit;
