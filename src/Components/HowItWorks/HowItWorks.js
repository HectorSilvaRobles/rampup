import React, { Component } from 'react'
import './howitworks.css'

export default class HowItWorks extends Component {
    render() {
        return (
            <div className='how-it-works'>
                <div className='hw-header'>
                    <h1>How It Works</h1>
                </div>
                <div className='hw-sec1'>
                    <div className='sec-left'></div>
                    <div className='sec-right'>
                        <h1>Create a Profile</h1>
                        <p>You’re more than your employment history. Our profile builder allows you to quickly create a complete picture of yourself. Once you’re approved, you’ll be matched with companies that are looking for people just like you.</p>
                    </div>
                </div>
                <div className='hw-sec2'>
                    <div className='sec-left'>
                        <h1>Explore Opportunities</h1>
                        <p>With our robust search tools, explore opportunities and companies you’ll fit right in with, or sit back and let the offers come to you.</p>
                    </div>
                    <div className='sec-right'>
                        
                    </div>
                </div>
                <div className='hw-sec3'>
                <div className='sec-left'></div>
                    <div className='sec-right'>
                        <h1>Get Hired</h1>
                        <p>Compare offers, benefits and unique company perks to determine the best fit for you. Accept an offer and you’re off!</p>
                    </div>
                </div>
                <div className='hw-sec4'>
                    <div className='sec-left'>
                        <h1>Celebrate and Get Rewarded!</h1>
                        <p>Treat yourself! Once you’re hired, we’ll send you a $500 signing bonus.</p>
                    </div>
                    <div className='sec-right'>
                        
                    </div>
                </div>
                <div className='hw-sec5'>
                    <h1>It takes 8 clicks to get started (we counted).</h1>
                    <button>Create Your Profile</button>
                </div>
            </div>
        )
    }
}
