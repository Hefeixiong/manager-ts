import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
