import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import '../styles/Navbar.css'
import { Language, Reorder } from "@mui/icons-material"

import franceFlag from '../assets/france flag.png'
import usaFlag from '../assets/usa flag.png'


export default function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [lang, setLang] = useState('Eng');

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location, lang])
    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev)
                }}>
                    <Reorder />
                </button>
            </div>
            <div className='nav_elements'>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/experiences'>Experinces</Link>
                </div>
                <div className='languages'>
                    <img src={lang == 'Eng' ? franceFlag : usaFlag} onClick={() => {
                    setLang((lang == 'Eng')? 'Fr': 'Eng')
                }}/>
                </div>
            </div>

        </div>
    )
}