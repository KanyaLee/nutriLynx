import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className='navigationBar-container'>
            <div id='navigationBar-item' className='home'>
                <a href='/'>Home</a>
            </div>

            <div id='navigationBar-item' className='vitamin-mineral'>
                <a href='/vitamins'>Vitamin Supplement</a>
            </div>

            <div id='navigationBar-item' className='health-wellbeing'>
                <a href='/health-wellbeing'>Health & Wellbeing</a>
            </div>

            <div id='navigationBar-item' className='blog'>
                <a href='/blog'>Blog</a>
            </div>
            
        </div>
    );
}
export default NavigationBar; 