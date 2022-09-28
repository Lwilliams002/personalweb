import MainPage from "./Components/MainPage";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Resume from "./Components/Pages/Resume";
/*                  TO DO LIST
* Create empty project containers
* Add Resume page
*  */

function App() {
  return (
    <div>
        <MainPage />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/resume"} element={<Resume />} />
        </Routes>


    </div>
  );
}

export default App;
