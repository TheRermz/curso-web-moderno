import React from "react";
import { Route, Routes } from "react-router";

import Home from "../components/home/home";
import UserCrud from "../components/user/UserCrud";

const PageRoutes = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/users" element={<UserCrud />} />
      <Route from="*" element={<Home />} />
    </Routes>
  );
};

export default PageRoutes;
