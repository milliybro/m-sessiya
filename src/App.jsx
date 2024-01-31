import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kompyuter from "./pages/KTE";
import ExamPage from "./pages/exams";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExamPage />}></Route>
        <Route path="/kompyuterni_tashkil etilishi" element={<Kompyuter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
