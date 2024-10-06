import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "components/layout";
import NewsFeed from "views/news-feed";
import Search from "views/search";
import ErrorPage from "views/error-page";
const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={"/news-feed"} />} />
        <Route path="/news-feed" element={<NewsFeed />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to={"/error"} />} />
      </Route>
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
