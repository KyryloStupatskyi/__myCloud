import React from "react";
import "./styles/home.scss"
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./normalize.scss"

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;