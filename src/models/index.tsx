import { AxiosResponse } from "axios";
import axios from "services/axios-instance";

export const getNewsAPI = async (
  query: string
): Promise<AxiosResponse<any>> => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};

export const getNewsFeedAPI = async (
  sources: string,
  category: string
): Promise<AxiosResponse<any>> => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&sources=${sources}&category=${category}`
  );
  return data;
};
