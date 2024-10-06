import { FC } from "react";
import Card from "components/card";
import { INewsAPIProps } from "types/index";

interface Props {
  data: INewsAPIProps[];
}
const Cards: FC<Props> = ({ data }) => {
  return (
    <>
      {data
        ?.filter((item) => item.urlToImage)
        ?.map((item: INewsAPIProps, index) => (
          <div className="col-md-4">
            <Card
              key={index}
              author={item?.author}
              content={item?.content}
              description={item?.description}
              publishedAt={item?.publishedAt}
              source={item?.source}
              title={item?.title}
              url={item?.url}
              urlToImage={item?.urlToImage}
            />
          </div>
        ))}
    </>
  );
};

export default Cards;
