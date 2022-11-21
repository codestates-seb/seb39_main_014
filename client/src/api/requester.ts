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
  const accessToken = getLocalStorage(ACCESS_TOKEN);
  const response: AxiosResponse<Payload> = await axiosInstance(
    accessToken
      ? { headers: { Authorization: `Bearer ${accessToken}` }, ...option }
      : { ...option }
  );
  return {
    status: response.status,
    headers: response.headers,
    payloda: response.data,
  };
}
