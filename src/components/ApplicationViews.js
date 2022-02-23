import React from "react"
import { Route } from "react-router-dom"
import { AboutMe } from "./aboutme"
import { Contact } from "./Contact"
import { Intro } from "./intro"
import { Projects } from "./Projects"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Intro />
            </Route>
            <Route path="/about">
                <AboutMe />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </>
    )
}