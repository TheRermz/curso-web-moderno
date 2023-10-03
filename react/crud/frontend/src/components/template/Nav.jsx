import "./Nav.css";
import NavItem from "./NavItem";
import React from "react";

function Nav(props) {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <NavItem location="" navname="Início" icon="home" />
        <NavItem location="users" navname="Usuários" icon="users" />
      </nav>
    </aside>
  );
}

export default Nav;
