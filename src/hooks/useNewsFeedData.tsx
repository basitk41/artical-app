import { useState } from "react";
import { getNewsFeedAPI } from "models";

export interface INewsAPIProps {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: any; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
const useData = () => {
  const [data, setData] = useState<INewsAPIProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async (sources: string, category: string) => {
    setLoading(true);
    const data: any = await getNewsFeedAPI(sources, category);
    setData(data.articles);
    setLoading(false);
  };

  return { data, loading, getData };
};

export default useData;
