import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail1 from "./routes/ohjeong";
import Detail2 from "./routes/chuntae";
import Detail3 from "./routes/ohho";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/ohjeong" element={<Detail1 />} />
      </Routes>
      <Routes>
        <Route path="/chuntae" element={<Detail2 />} />
      </Routes>
      <Routes>
        <Route path="/ohho" element={<Detail3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
