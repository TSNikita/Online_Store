import { Route, Routes } from "react-router-dom";
import "./App.css";
import Basket from "./pages/BasketPages/Basket";
import Main from "./pages/MainPages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
