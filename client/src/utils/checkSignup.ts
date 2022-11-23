export function checkId(userId: string) {
  let idReg = /^[0-9a-zA-Z]/g;
  return idReg.test(userId);
}

export function checkEmail(email: string) {
  let emailReg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(email);
}

export function checkUsername(name: string) {
  let usernameReg = /[가-힣]/g;
  return usernameReg.test(name);
}

export function checkNick(nickname: string) {
  let nickReg = /^[0-9a-zA-Zㄱ-ㅎ가-힣 ]/g;
  return nickReg.test(nickname);
}

export function checkPassword(password: string) {
  let passwordReg = /^[0-9a-zA-Z]{8,16}$/;
  return passwordReg.test(password);
}

export function cofirmPassword(password: string, password2: string) {
  return password === password2;
}
