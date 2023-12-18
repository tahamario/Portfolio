import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css'
import { toast } from 'react-toastify';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5t1jw24', 'template_l7ecpom', form.current, 'tx2xiNiLze6JeUWpg')
            .then((result) => {
                e.target.reset();
                toast.success('Message sent👌', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className="contact-container" ref={form} onSubmit={sendEmail}>
            <div>
                <h2>Contact Me</h2>
                <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            </div>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="user_name" type="text" placeholder="Enter your name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="user_email" type="email" placeholder="Enter your email" required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Enter your message" required defaultValue={""} />
                </div>
            </div>
            <button type="submit" className="bg-primary text-primary-foreground">Submit</button>
        </form>

    )
}

export default ContactForm