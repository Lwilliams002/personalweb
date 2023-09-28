import MainPage from "./Components/MainPage";
import {Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Resume from "./Components/Pages/Skillset";
import Projects from "./Components/Pages/Projects";
import Copyrights from "./Components/UI/Copyrights";


function App() {
  return (
    <div>
        <MainPage />
        <Routes>
            <Route path="personalweb/" element={<Home />} />
        </Routes>
        <Copyrights />
    </div>
  );
}

export default App;
