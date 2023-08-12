import { Route, Routes } from "react-router-dom";
import { CREATE_STAGE_1, HOME_URL } from "../helper/paths";
import Home from "../pages";
import CreateProjectPage from "../pages/create-project";
import CreateCyclePage from "../pages/create-cycle";
import PayoutsPage from "../pages/payouts";
import AddNFtPage from "../pages/add-nft";

const App = () => {
  return (
    <Routes>
      <Route path={HOME_URL} index element={<Home />} />
      <Route path={CREATE_STAGE_1} index element={<CreateProjectPage />} />
      <Route path="/cycle" index element={<CreateCyclePage />} />
      <Route path="/payouts" index element={<PayoutsPage />} />
      <Route path="/add-nft" index element={<AddNFtPage />} />
    </Routes>
  );
};

export default App;