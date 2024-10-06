import { FC } from "react";
import { INewsAPIProps } from "hooks/useSearchData";
const Card: FC<INewsAPIProps> = ({
  author,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
}) => {
  return (
    <div className="card mb-3">
      {urlToImage && (
        <img
          width={"100%"}
          height={200}
          src={urlToImage}
          className="card-img-top"
          alt={title}
        ></img>
      )}
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <p className="card-text">
          Author: <em>{author}</em>
        </p>
        <p className="card-text">
          Published At: <em>{publishedAt?.split("T")[0]}</em>
        </p>
        <p className="card-text">
          Source: <em>{source?.name}</em>
        </p>
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Go to official website
        </a>
      </div>
    </div>
  );
};

export default Card;
