import React, { Component } from 'react'
import './footer.css'
import Logo from '../../Media/logo2.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-background'></div>
                <div className='footer-section'>
                    <div className='upper-footer'>
                        <div className='footer-info'>
                            <h1>For Employers</h1>
                            <div className='white-line'></div>
                            <ul>
                                <li>How It Works</li>
                                <li>Testimonials</li>
                                <li>FAQ</li>
                                <li>Recruiting Services</li>
                                <li>Sign Up</li>
                            </ul>
                        </div>
                        <div className='footer-info'>
                            <h1>For Candidates</h1>
                            <div className='white-line'></div>
                            <ul>
                                <li>How It Works</li>
                                <li>Testimonials</li>
                                <li>FAQ</li>
                                <li>Sign Up</li>
                            </ul>
                        </div>
                        <div className='footer-info'>
                            <h1>Industries</h1>
                            <div className='white-line'></div>
                            <ul>
                                <li>Aesthetics</li>
                                <li>Digital Health</li>
                                <li>HVAC/R</li>
                                <li>Medical Sales</li>
                                <li>Technology</li>
                            </ul>
                        </div>
                        <div className='footer-info'>
                            <h1>Learn More</h1>
                            <div className='white-line'></div>
                            <ul>
                                <li>Success Stories</li>
                                <li>Blog</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className='middle-footer'>
                        <h1>Connect With Us</h1>
                        <div className='contact-info'>
                            <h1>hectorsilvarobles@gmail.com</h1>
                            <h1>|</h1>
                            <h1>(801) 721-6725</h1>
                        </div>
                        <div className='social-links'>

                        </div>
                    </div>
                    <div className='lower-footer'>
                        <img src={Logo} />
                        <div className='terms'>
                            <h1>Terms</h1>
                            <h1>|</h1>
                            <h1>Privacy Policy</h1>
                        </div>
                        <h3>© 2018 RampUp, INC. All Rights Reserved.</h3>
                    </div>
                </div>
            </div>
        )
    }
}
