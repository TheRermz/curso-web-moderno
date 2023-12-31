import React from "react";
import Main from "../template/Main";

function home(props) {
  return (
    <Main
      icon="home"
      title="Início"
      subtitle="Segundo projeto do capítulo de React"
    >
      <div className="display-4">BEM VINDO</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a construção de um cadastro desenvolvido em
        React!
      </p>
    </Main>
  );
}

export default home;
