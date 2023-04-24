import MainPage from "./Components/MainPage";
import {Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Resume from "./Components/Pages/Resume";
import Projects from "./Components/Pages/Projects";
/*                  TO DO LIST
* Create empty project containers
* Add Resume page
*  */

function App() {
  return (
    <div>
        <MainPage />
        <Routes>
            <Route path="personalweb/" element={<Home />} />
            <Route path="personalweb/resume" element={<Resume />} />
        </Routes>
    </div>
  );
}

export default App;
