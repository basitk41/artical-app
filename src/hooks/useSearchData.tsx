import { useState } from "react";
import { getNewsAPI } from "models";
import { INewsAPIProps } from "types/index";

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
