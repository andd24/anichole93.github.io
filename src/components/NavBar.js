import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    return (
        <>
        <div className="navbar">
        
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/">home</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/about">my story</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/projects">my projects</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/contact">contact me</Link>
                </li>
            
        </div>
        </>
        
    )
}