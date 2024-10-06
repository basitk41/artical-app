import { FC } from "react";
import { Outlet } from "react-router-dom";
import { SearchIcon } from "assets/icons/search-icon";
import { useNavigate, NavigateFunction } from "react-router-dom";

interface Props {}
const Layout: FC<Props> = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-light py-2 px-4">
        <div className="col-6">
          <h1>
            <span role="button" onClick={() => navigate("/news-feed")}>
              News Feed
            </span>
          </h1>
        </div>
        <div className="col-6 text-end py-md-2">
          <span role="button" onClick={() => navigate("/search")}>
            <SearchIcon width={40} height={40} />
          </span>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Layout;
