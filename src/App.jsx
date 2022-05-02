import Parameters from "./myComponents/Parameters";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./myComponents/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/:numeric" element={<Parameters />} />
          <Route
            path="/:numeric/:fontColor/:backgroundEffect"
            element={<Parameters />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
