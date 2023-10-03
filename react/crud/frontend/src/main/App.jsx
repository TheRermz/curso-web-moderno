import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Routes";

import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Logo from "../components/template/logo";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <PageRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
