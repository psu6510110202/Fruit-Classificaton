import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Fruitpage from "./pages/Fruitpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fruit/:id" element={<Fruitpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
