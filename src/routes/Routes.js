import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../components/features/navbar/Navbar";
import LandingPage from "../pages/LandingPage";

export default function Routes() {
  return (
    <BrowserRouter basename={"/"}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      {/* <FooterOne /> */}
    </BrowserRouter>
  );
}
