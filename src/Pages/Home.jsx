import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import '../styles/Home.css'
import cv from '../assets/Taha Moudnib.pdf'
import ContactForm from '../components/ContactForm'

function Home() {

    return (
        <div className='home'>
            <div className='about'>
                <div className='greeting_dev'>
                    <div>
                        <h2>Hi<div className='hi-emoji'>👋</div>, I'm Taha Moudnib</h2>
                    </div>
                </div>
                <div className='prompt'>
                    <p>
                        I'm full stack developer, I possess a broad range of technical skills and
                        knowledge that allow me to develop and maintain both the front-end and back-end
                        of a web application.
                    </p>
                    <span>Let's get in touch</span>
                    <div>
                        <a href="https://www.linkedin.com/in/taha-m/" target='_blank'>
                            <LinkedIn />
                        </a>
                        <a href="mailto: taha.moudnib@hotmail.com">
                            <Email />
                        </a>
                        <a href="https://github.com/tahamario" target='_blank'>
                            <GitHub />
                        </a>
                    </div>
                </div>
                <div className='resume'>
                    <a href={cv} target='_blank'> Download CV </a>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>HTML, CSS, JavaScript, ReactJS, React Native,
                            BootStrap, MaterialUI, TailwindCSS</span>
                    </li>
                </ol>
                <ol className='list'>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span> PHP, Laravel, NodeJS, .NET, ExpressJS,
                            MySQL, MongoDB, MS SQL</span>
                    </li>
                </ol>
            </div>
            <ContactForm />
        </div>
    )
}

export default Home