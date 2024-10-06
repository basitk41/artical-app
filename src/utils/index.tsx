import { INewsAPIProps } from "types/index";

export const handleFilter = (query: string, data: INewsAPIProps[]) =>
  query
    ? data.filter((item) => {
        return (
          item?.title?.toLowerCase().includes(query.toLowerCase()) ||
          item?.author?.toLowerCase().includes(query.toLowerCase()) ||
          item?.source?.name?.toLowerCase().includes(query.toLowerCase()) ||
          item?.publishedAt?.toLowerCase().includes(query.toLowerCase())
        );
      })
    : data;
