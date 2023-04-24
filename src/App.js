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
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
  );
}

export default App;
