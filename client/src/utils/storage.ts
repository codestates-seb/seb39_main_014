export const getLocalStorage = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const setLocalStorage = (key: string, value: string) => {
  try {
    if (!value) {
      throw new Error("Value is Empty !");
    }
    return localStorage.setItem(key, value);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Fail to setLocalStorage");
    }
  }
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
