import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';


const HeaderBar = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/' >
                    <img src='/images/logo.png' alt='logo' /> 
                </Link>
            </div>
            <div className='searchBar'>
                <input type='text' placeholder='Search..' /> 
                {/* use dropdown function here later */}
            </div>
            <div className='other icons'>
                <Link to='/quiz'> {/* for quiz page */}
                    <img src='/images/quiz.png' alt='quiz' />
                </Link>

                <Link to='user signup/signin page'> {/* for signup/signin */}
                    <img src='/images/user.png' alt='user' /> 
                </Link>

                <Link to='/cart'> {/* for cart */}
                    <img src='/images/cart.png' alt='cart' />
                </Link>

            </div>

        </div>

        
    );
}
export default HeaderBar;
