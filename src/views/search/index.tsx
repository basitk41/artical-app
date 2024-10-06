import { FC, useState } from "react";
import Input from "components/input";
import useSearchData from "hooks/useSearchData";
import Card from "components/card";
import Spinner from "components/spinner";
import Button from "components/button";

interface Props {}
const Search: FC<Props> = () => {
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { data, loading, handleSearch } = useSearchData();

  const searchedData = search
    ? data.filter((item) => {
        return (
          item?.title?.toLowerCase().includes(search.toLowerCase()) ||
          item?.author?.toLowerCase().includes(search.toLowerCase()) ||
          item?.source?.name?.toLowerCase().includes(search.toLowerCase()) ||
          item?.publishedAt?.toLowerCase().includes(search.toLowerCase())
        );
      })
    : data;

  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="input-group mt-4">
          <Input
            type="text"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyUp={(event) => event.key === "Enter" && handleSearch(query)}
            placeholder="Search"
          />
          <Button text="Search" onClick={() => handleSearch(query)} />
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center mt-4">
          <Spinner />
        </div>
      ) : (
        data.length > 0 && (
          <div className="container mt-4">
            <div className="row justify-content-end mb-4">
              <div className="col-md-4">
                <Input
                  placeholder="Filter by Date, Author, Source"
                  onChange={(event) => setSearch(event.target.value)}
                  value={search}
                />
              </div>
            </div>
            <div className="row">
              {searchedData
                ?.filter((item) => item.urlToImage)
                ?.map((item: any, index) => (
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
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default Search;
