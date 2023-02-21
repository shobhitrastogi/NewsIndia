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

            </ul>
        </div>
    )
}

export default Header
