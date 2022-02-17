import React from "react"
import { Route } from "react-router-dom"
import { AboutMe } from "./aboutme"
import { Intro } from "./intro"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Intro />
            </Route>
            <Route path="/aboutme">
                <AboutMe />
            </Route>
        </>
    )
}