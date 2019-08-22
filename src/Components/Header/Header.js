import React, { Component } from 'react'
import './header.css'
import Logo from '../../Media/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className='header' >
                <div className='logo'>
                    <img src={Logo} />
                </div>
                <nav>
                    <ul>
                        <li>Candidates</li>
                        <li>Employers</li>
                        <li>Success Stories</li>
                        <li>Industries</li>
                        <li>Login</li>
                    </ul>
                </nav>
                <button>Sign Up!</button>
            </div>
        )
    }
}
