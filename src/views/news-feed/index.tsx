import { FC, useEffect, useState } from "react";
import Input from "components/input";
import useNewsFeedData from "hooks/useNewsFeedData";
import Spinner from "components/spinner";
import useLocalStorageState from "use-local-storage-state";
import Select from "components/select";
import Categories from "mocks/categories.json";
import Sources from "mocks/sources.json";
import { handleFilter } from "utils";
import Cards from "components/cards";

interface Props {}
const NewsFeed: FC<Props> = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useLocalStorageState("category", {
    defaultValue: "general",
  });
  const [sources, setSources] = useLocalStorageState("sources", {
    defaultValue: "",
  });
  const { data, loading, getData } = useNewsFeedData();

  useEffect(() => {
    getData(sources, category);
  }, [sources, category]);

  const searchedData = handleFilter(search, data);

  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="row justify-content-end">
          <div className="col-md-2 mt-4">
            <h4>Category</h4>
            <Select
              value={category}
              options={Categories}
              onChange={(event) => {
                setSources("");
                setCategory(event.target.value);
              }}
            />
          </div>
          <div className="col-md-2 mt-4">
            <h4>Sources</h4>
            <Select
              value={sources}
              options={Sources}
              onChange={(event) => {
                setCategory("");
                setSources(event.target.value);
              }}
            />
          </div>
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
              <Cards data={searchedData} />
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default NewsFeed;
