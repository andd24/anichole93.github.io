import { useEffect, useRef } from "react"
import "./styles.css"

export const AboutMe = () => {
    // const view = useRef()

    // const scrollToBottom = () => {
    //     view.current?.scrollIntoView({ behavior: "smooth" })
    //   }
    
    // useEffect(() => {
    //     scrollToBottom()
    // }, [])
    
    return (
        <>
        <section className="aboutme">
            <h1>about me</h1>  
            <div></div>
            <div></div>
            <div>*driven, hardworking fullstack developer/engineer</div>
            <div>*current stack: HTML5, CSS3, Javascript, React JS, Python, Django, SQL</div>
            <div>*tech industry transplant w/ background in service industry & the trades</div>
            <div>*looking to leverage technology for a better world</div>
            <div>*enjoys problem solving and loves a challenge</div>
            <div>*proficient at writing about self in third person</div>
            <div>...</div>
        </section>

        </>
    )
}