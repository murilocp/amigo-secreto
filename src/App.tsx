import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Raffle from "./pages/Raffle";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/sorteio" element={<Raffle />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
