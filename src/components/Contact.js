import { useState } from "react"
import emailjs from 'emailjs-com'
import "./styles.css"
import { send } from "emailjs-com"

export const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Ashley',
        message: '',
        reply_to: '',
      })

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()

        send(
            'service_9ino8wk',
            'template_hg3lm2i',
            toSend,
            'user_bYU0FOcPJWemGnrayRIuC'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text)
            })
            .catch((err) => {
              console.log('FAILED...', err)
            })
    }

    return (
        <>
        <section className="contact">
            <h1>contact</h1>  
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='Your name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                {/* <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                /> */}
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <button type="submit">Send</button>
            </form>

            <div></div>
            <h2>socials</h2>
            <div className="">
                <a className="icon" href="https://www.linkedin.com/in/anichole"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"/></a>
                <a className="icon" href="https://www.github.com/anichole93"><img src="https://img.icons8.com/ios-filled/50/000000/github.png"/></a>
            </div>
        </section>

        </>
    )
}