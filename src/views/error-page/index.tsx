import { FC } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Button from "components/button";

interface Props {}
const ErrorPage: FC<Props> = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Button text="Go Home" onClick={() => navigate("/")} />
    </div>
  );
};

export default ErrorPage;
