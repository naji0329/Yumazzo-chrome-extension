import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";

function App() {
  return (
    <div className="w-[400px] min-h-[400px] p-6 bg-primary">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/add" element={<AddRecipe />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
