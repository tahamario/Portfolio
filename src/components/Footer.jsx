import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a target='_blank' href='https://instagram.com/taha_mario'>
                    <Instagram />
                </a>
                <a href="https://www.linkedin.com/in/taha-m/" target='_blank'>
                    <LinkedIn />
                </a>
                <a href="https://github.com/tahamario" target='_blank'>
                    <GitHub />
                </a>
            </div>
            <p>Made with❤️by Taha Mario </p>
            <p>&copy; 2023  All Rights Reserved</p>
        </div>
    )
}

export default Footer