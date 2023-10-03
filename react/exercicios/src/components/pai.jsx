import React from "react";

const childrenWithProps = (props) => {
  return React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { ...props, ...child.props });
  });
};

export const Pai = (props) => {
  return (
    <div>
      <h1>
        {props.nome} {props.sobrenome}
      </h1>
      <h2>Filhos</h2>
      <ul>
        {/* como passar os filhos aqui */}
        {childrenWithProps(props)}
      </ul>
    </div>
  );
};
