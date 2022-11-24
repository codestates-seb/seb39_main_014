import { removeLocalStorage } from "../utils/storage";
import { ACCESS_TOKEN } from "./common";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getLocalStorage } from "../utils/storage";

const createAxiosInstance = () => {
  const base = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  return base;
};

const axiosInstance = createAxiosInstance();

export default async function requester<Payload>(option: AxiosRequestConfig) {
  const accessToken = getLocalStorage("token");
  const response: AxiosResponse<Payload> = await axiosInstance(
    accessToken
      ? { headers: { Authorization: `Bearer ${accessToken}` }, ...option }
      : { ...option }
  );
  return {
    status: response.status,
    headers: response.headers,
    payload: response.data,
  };
}

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      removeLocalStorage("token");
    }
    return Promise.reject(error);
  }
);
