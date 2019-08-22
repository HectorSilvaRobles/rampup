import React, { Component } from 'react'
import './footer.css'

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
                        <div></div>
                    </div>
                    <div className='lower-footer'></div>
                </div>
            </div>
        )
    }
}
