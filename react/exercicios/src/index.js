import React from "react";
import ReactDOM from "react-dom";

import { Pai } from "./components/pai";
import { Filho } from "./components/filho";

ReactDOM.render(
  <>
    <Pai nome="Ednaldo" sobrenome="Silva">
      {/* Como passar os componentes Filho aqui? */}
      <Filho nome="Ednaldo II" />
      <Filho nome="Cleiton" />
      <Filho nome="Cleidiane" />
    </Pai>
  </>,
  document.getElementById("root")
);
