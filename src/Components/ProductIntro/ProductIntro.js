import React, { Component } from 'react'
import './productintro.css'

export default class ProductIntro extends Component {
    render() {
        return (
            <div className='product-intro'>
                <div className='intro-1'>
                    <div className='intro1-left'>
                        <div className='intro1-left-header'>
                            <h2>Set Your Requirements</h2>
                            <h1>Confidence in Your Worth</h1>
                            <h3>Set your salary and let offers come to you</h3>
                            <div className='intro1-left-line'></div>
                        </div>
                        <p>Not knowing your value is the easiest way to stay stagnant in your career. Don’t miss out on opportunities. Discretely set your desired salary range and let the offers come to you.</p>
                        <button>View Success Stories</button>
                    </div>
                    <div className='intro1-right'></div>
                </div>
                <div className='intro-2'>
                    <div className='intro2-left'></div>
                    <div className='intro2-right'>
                        <div className='intro2-right-header'>
                            <h2>Easy Sign Up</h2>
                            <h1>Getting a Job Won't be a Job</h1>
                            <h3>Find opportunities, simply and discretely</h3>
                            <div className='intro2-right-line'></div>
                        </div>
                        <p>Create a profile with RampUp once and reach the most innovative companies in your industry, discretely. Easily chat, interview and accept offers easily – without disrupting your current job.</p>
                        <button>Sign Up in 8 Clicks</button>
                    </div>
                </div>
                <div className='intro-3'>
                    <div className='intro3-left'>
                        <div className='intro3-left-header'>
                            <h2>Your Talent Advocate Team</h2>
                            <h1> Real People When You Need Them</h1>
                            <h3>Our team helps you succeed at every step</h3>
                            <div className='intro3-left-line'></div>
                        </div>
                        <p>Our talent advocate team is made of real people (crazy, right?). Their #1 priority is to support you as you explore opportunities, prep for interviews and make the next step in your career.</p>
                        
                    </div>
                    <div className='intro3-right'></div>
                </div>
                
            </div>
        )
    }
}
