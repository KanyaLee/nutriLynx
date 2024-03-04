import React, {useState, useEffect} from 'react';
import {supabase} from './client'

export default function SignUp() {

    const [formData, setFormData] = useState({ FullName: '', Email:'', Password: '' });
    
    console.log(formData)
    // Handles input change for all inputs
    
    
    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
            
        
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form>
                <div>
                    <input 
                    placeholder='full name'
                    name='FullName'
                    type='text'
                    onChange={handleChange}
                    required/>
                </div>
                <div>
                    <input 
                        placeholder='email'
                        name='Email'
                        type='email'
                        onChange={handleChange}
                        required/>
                </div>
                <div>
                    <input 
                    placeholder='password'
                    name='Password'
                    type='password'
                    onChange={handleChange}
                    required/>
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <div>
                    <p>Already have an account? <a href="/signin">Sign In</a></p>
                </div>
                <div>
                    <p>Sign Up with google</p>

                </div>
            </form>
        </div>

    )
}

// Path: frontend/src/components/User/SignIn.js
// Compare this snippet from frontend/src/components/User/SignIn.js:
// import React from 'react';
// 
// const SignIn = () => {
//     // ...       
//     return (
//         <div className='sign-in-container'>
//             <img src={Logo} alt='logo' />
//             <h2>Welcome back!</h2>