import React from "react";
import "./styles/home.scss"
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./normalize.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;