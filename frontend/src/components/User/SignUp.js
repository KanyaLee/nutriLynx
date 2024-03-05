import React, {useState, useEffect} from 'react';
import {supabase} from './client'
import { Link } from 'react-router-dom'
import './User.css';


export default function SignUp() {

    const [formData, setFormData] = useState({ fullName: '', email:'', password: '' });
    
    console.log(formData)
    // Handles input change for all inputs
    
    function handleChange(e) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    // Handles form submit
    async function handleSubmit(e) {
        e.preventDefault();
        try {
          const { user, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
          }, {
            data: {
              fullName: formData.fullName,
            }
          });
      
          if (error) throw error;
          
          console.log(user);
          alert('Check your email for the confirmation link');
        } catch (error) {
          console.error('Sign up error:', error);
          alert(error.message);
        }
      }
    
    return (
        <div className='signup-container'>
            <h1>Create an Account</h1>
            <p>Build your healthy routine with NutriLynx</p>
            <form id="signup-form"onSubmit={handleSubmit}>
                <div>
                    <input 
                    id="name"
                    placeholder='Name'
                    name='fullName'
                    type='text'
                    onChange={handleChange}
                    required/>
                </div>
                <div>
                    <input 
                        id="email"
                        placeholder='Email'
                        name='email'
                        type='email'
                        onChange={handleChange}
                        required/>
                </div>
                <div>
                    <input 
                    id="password"
                    placeholder='Password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                    required/>
                </div>

                <div class="password-requirements">
                    <p>Password strength: <span id="password-strength">weak</span></p>
                    <p>Cannot contain your name or email address</p>
                    <p>At least 8 characters</p>
                    <p>Contains a number or symbol</p>
                </div>

                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <div>
                    <p>Already have an account? <Link to="/user/login">Log in</Link></p>
                </div>

                {/* <div class="divider">or</div> */}

            </form>
        </div>

    )
}

