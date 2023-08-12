import { Route, Routes } from "react-router-dom";
import { CREATE_STAGE_1, HOME_URL } from "../helper/paths";
import Home from "../pages";
import CreateProjectPage from "../pages/create-project";

const App = () => {
  return (
    <Routes>
      <Route path={HOME_URL} index element={<Home />} />
      <Route path={CREATE_STAGE_1} index element={<CreateProjectPage />} />
    </Routes>
  );
};

export default App;
