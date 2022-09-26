import React from 'react'
import logo from "../../logo.svg";
import "./navbar.scss";

function Navbar() {
    return (
        <nav className='navbar'>

            <img src={logo} alt='sehirlerimiz' />
            <ul className='navLinks'>

                <li>
                    <a href="/" className="navLink">Home</a>
                </li>
                <li>
                    <a href="/" className="navLink">Hakkımızda</a>
                </li>
                <li>
                    <a href="/" className="navLink active">Tours</a>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar
