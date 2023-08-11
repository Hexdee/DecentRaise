import { Route, Routes } from "react-router-dom";
import { HOME_URL } from "../helper/paths";
import Home from "../pages";

const App = () => {
    return (
        <Routes>
            <Route path={HOME_URL} index element={<Home />} />
        </Routes>
    )
};

export default App;