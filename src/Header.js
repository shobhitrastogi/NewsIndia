import React from 'react'

import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <ul className="nav justify-content-center bg-dark ">
                <li className="nav-item">
                    <Link   className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">   
                    <Link  className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/business">Business</Link>
                </li>
            <li className="nav-item">
                    <Link  className="nav-link" to="/general">General</Link>
                </li> 
                <li className="nav-item">
                    <Link  className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/sports">Sports</Link>
                </li>

            </ul>
        </div>
    )
}

export default Header
