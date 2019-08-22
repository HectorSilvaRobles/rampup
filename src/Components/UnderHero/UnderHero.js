import React, { Component } from 'react'
import './underhero.css'

export default class UnderHero extends Component {
    render() {
        return (
            <div className='under-hero'>
                <div className='uh-background'></div>
                <div className='uh-header'>
                    <h1>We connect people just like you with the most innovative companies around the world.</h1>
                    <div className='uh-line'></div>
                </div>
                <div className='uh-info'>
                    <div className='uh-left'></div>
                    <div className='uh-right'>
                        <div className='uh-right-header'>
                            <h2>Ai-Powered Job Search</h2>
                            <h1>Smart Career Matches</h1>
                            <h3>Let our AI hunt for you</h3>
                            <div className='little-line'></div>
                        </div>
                        <p>Our powerful AI filters out the noise, so you can focus on companies you will love, and will love you back. Actively search and apply for opportunities or sit back and let offers come to you.</p>
                        <button>See your top matches in 2 min</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
