import React, { Component } from 'react'
import './hero.css'
import Girl from '../../Media/girl.png'

export default class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <div className='left-hero'>
                    <div className='hero-info'>
                        <h1>Forget the Job Hunt</h1>
                        <h2>We hate the job hunt almost as much as you. With RampUp it's simple.</h2>
                        <h3>Search. Connect. Get Hired!</h3>
                        <div className='hi-buttons'>
                            <button className='button1'>Success Stories</button>
                            <button className='button2'>Sign Up Today!</button>
                        </div>
                    </div>
                </div>
                <div className='right-hero'>
                    <img src={Girl} />
                </div>
            </div>
        )
    }
}
