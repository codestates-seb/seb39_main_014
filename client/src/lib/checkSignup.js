/** 아이디 정합성 체크 함수 */
export function checkId(userId) {
  let idReg = /^[0-9a-zA-Z]$/;
  return idReg.test(userId);
}

/** 이메일 정합성 체크 함수 */
export function checkEmail(email) {
  let emailReg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(email);
}

/** 이름 정합성 체크 함수 */
export function checkUsername(name) {
  let usernameReg = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
  return usernameReg.test(name);
}

/** 닉네임 정합성 체크 함수 */
export function checkNick(nickname) {
  let nickReg = /^[0-9a-zA-Zㄱ-ㅎ가-힣 ]{2,6}$/;
  return nickReg.test(nickname);
}

/** 비밀번호 정합성 체크 함수 */
export function checkPassword(password) {
  let passwordReg = /^[0-9a-zA-Z]{8,16}$/;
  return passwordReg.test(password);
}

/** 비밀번호 확인 정합성 체크 함수 */
export function cofirmPassword(password, password2) {
  return password === password2;
}
