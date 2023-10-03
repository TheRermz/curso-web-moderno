import Header from "./Header";
import "./Main.css";

import React from "react";

function Main(props) {
  return (
    <React.Fragment>
      <main className="content">
        <Header />
      </main>
    </React.Fragment>
  );
}

export default Main;
