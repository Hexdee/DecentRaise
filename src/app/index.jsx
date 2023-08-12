import { Route, Routes } from "react-router-dom";
import { ADD_NFT, CREATE_CYCLE, CREATE_PAYOUTS, CREATE_STAGE_1, HOME_URL } from "../helper/paths";
import Home from "../pages";
import CreateProjectPage from "../pages/create-project";
import CreateCyclePage from "../pages/create-cycle";
import PayoutsPage from "../pages/payouts";
import AddNFtPage from "../pages/add-nft";

const App = () => {
  return (
    <Routes>
      <Route path={HOME_URL} index element={<Home />} />
      <Route path={CREATE_STAGE_1} element={<CreateProjectPage />} />
      <Route path={CREATE_CYCLE} element={<CreateCyclePage />} />
      <Route path={CREATE_PAYOUTS} element={<PayoutsPage />} />
      <Route path={ADD_NFT} element={<AddNFtPage />} />
    </Routes>
  );
};

export default App;