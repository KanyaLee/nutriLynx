import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';
import User from '../User/User';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



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
            <div className='other-icons'>
                <a href='/quiz'>Quiz</a>

                {/* <Link to='user signup/signin page'> 
                    <img src='/images/user.png' alt='user' /> 
                </Link> */}

                <User />

                <Link to='/cart'> {/* for cart - implement cartComp/Cart.js later*/}
                    <ShoppingBasketIcon style={{color:'black'}}fontSize='large' />
                </Link>

            </div>

        </div>

        
    );
}
export default HeaderBar;
