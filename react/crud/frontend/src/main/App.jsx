import "./App.css";
import React from "react";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Main from "../components/template/Main";
import Logo from "../components/template/logo";

function App(props) {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
