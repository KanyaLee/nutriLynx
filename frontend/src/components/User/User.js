import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import './User.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignUp from './SignUp';



const User = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const {isLoggedIn, login, logout} = useContext(AuthContext);

    const handleUserIconClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className='user-container'>
            <div className='user-icon' onClick={handleUserIconClick}>
                {/* <img src='/images/user.png' alt='user' /> */}
                <AccountCircleIcon fontSize='large'/>

            </div>

            {isDropdownVisible && (
                isLoggedIn ? (
                    <div className='dropdown'>
                        <Link to='/user/profile'>Profile</Link>
                        <Link to='/user/orders'>Orders</Link>
                        <button onClick={()=> {
                            logout();
                            setIsDropdownVisible(false);
                        }}>Log out</button>
                        {/* <Link to='/user/logout' onClick={logout}>Logout</Link> */}
                    </div>
                ) : (
                    <div className='dropdown'>
                        <Link to='/user/signup'>
                            Sign Up
                        </Link>
                        <Link to='/user/login'>Log in</Link>
                    </div>
                )
            )}
        </div>
    )
}

export default User;

