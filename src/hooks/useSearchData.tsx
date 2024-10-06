import { useState } from "react";
import { getNewsAPI } from "models";

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

  const handleSearch = async (query: string) => {
    if (query) {
      setLoading(true);
      const data: any = await getNewsAPI(query);
      setData(data.articles);
      setLoading(false);
    }
  };

  return { data, loading, handleSearch };
};

export default useData;
