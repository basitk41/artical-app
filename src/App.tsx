import { FC, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "routes";

const App: FC = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
