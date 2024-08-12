import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Searche from "./pages/searche/Searche";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./components/navbar/Navbar";

import { useContext, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import ThemeSelector from "./components/ThemeSelecttor/ThemeSelector";
import { ThemeContext } from "./context/themeProvider";

function App() {
  const {  mode } = useContext(ThemeContext);
  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/create" Component={Create} />
        <Route path="/search" Component={Searche} />
        <Route path="/recipe/:id" Component={Recipe} />
      </Routes>
    </div>
  );
}

export default App;
