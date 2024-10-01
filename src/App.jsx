import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import View from "./View";

let editeddataflage = 0;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
