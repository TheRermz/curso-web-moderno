import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function NavItem(props) {
  return (
    <nav className="menu">
      <Link to={`/${props.location}`}>
        <i className={`fa fa-${props.icon}`}> </i>
        {props.navname}
      </Link>
    </nav>
  );
}

export default NavItem;
