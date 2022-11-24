import axios from "axios";

interface SignupArgs {
  SIGNUP_URL: string;
  email: string;
  name: string;
  nickname: string;
  userId: string;
  password: string;
  setErrors: any;
}

const handleSignup = async ({
  SIGNUP_URL,
  userId,
  email,
  name,
  nickname,
  password,
  setErrors,
}: SignupArgs) => {
  try {
    const res = await axios.post(SIGNUP_URL, {
      userId,
      email,
      name,
      nickname,
      password,
    });
    window.location.replace("/login");
  } catch (error) {
    setErrors(error);
  }
};

export default handleSignup;
