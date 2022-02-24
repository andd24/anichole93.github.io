import React from "react"
import { Route } from "react-router-dom"
import { AboutMe } from "./aboutme"
import { Contact } from "./Contact"
import { Intro } from "./intro"
import { Projects } from "./Projects"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/" exact component={Intro} />
                {/* <Intro />
            </Route> */}
            <Route path="/about" exact component={AboutMe} />
                {/* <AboutMe />
            </Route> */}
            <Route path="/projects" exact component={Projects} />
                {/* <Projects />
            </Route> */}
            <Route path="/contact" exact component={Contact} />
                {/* <Contact />
            </Route> */}
        </>
    )
}