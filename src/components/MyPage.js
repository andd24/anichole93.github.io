import React from "react";
import { Route, HashRouter } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

export const MyPage = () => (
  <>
    <Route
      render={() => {
          return (
            <>
            <BrowserRouter>
              <NavBar /> 
              <ApplicationViews />
              <Footer />
              </BrowserRouter>
            </>
          );
    }} />
  </>
);