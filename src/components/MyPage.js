import React from "react";
import { Route, HashRouter } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { Footer } from "./Footer";

export const MyPage = () => (
  <>
    <Route
      render={() => {
          return (
            <>
            <HashRouter basename='/'>
              <NavBar /> 
              <ApplicationViews />
              <Footer />
              </HashRouter>
            </>
          );
    }} />
  </>
);