import React from "react"
import { Route } from "react-router-dom"
import { AboutMe } from "./aboutme"
import { Contact } from "./Contact"
import { Intro } from "./intro"
import { Projects } from "./Projects"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/">
                <Intro />
            </Route>
            <Route exact path="/about">
                <AboutMe />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
        </>
    )
}