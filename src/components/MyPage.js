import React from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ApplicationViews } from "./ApplicationViews";

export const MyPage = () => (
  <>
    <Route
      render={() => {
          return (
            <>
              <NavBar /> 
              <ApplicationViews />
            
            </>
          );
    }} />
  </>
);