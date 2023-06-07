import React from 'react'
import Logo from '../assets/logo.svg'
import { navLinks, navIcons } from './Constants'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={Logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {navLinks.map((navLink) => {
                        return (
                            <li key={navLink.id}>
                                <a href={navLink.href} className="nav-link"> {navLink.text} </a>
                            </li>

                        )
                    }
                    )}
                </ul>

                <ul className="nav-icons">
                    {navIcons.map((navIcon) => {
                        return (
                            <li key={navIcon.id}>
                                <a href={navIcon.link} target="_blank" className="nav-icon"><i className={navIcon.class}></i></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar