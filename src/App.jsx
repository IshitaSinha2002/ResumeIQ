import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/Upload.jsx";
import ResultPage from "./pages/Result.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;