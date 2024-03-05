import React, {useState, useEffect} from 'react';
import {supabase} from './client'
import { Link } from 'react-router-dom'


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
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    placeholder='full name'
                    name='fullName'
                    type='text'
                    onChange={handleChange}
                    required/>
                </div>
                <div>
                    <input 
                        placeholder='email'
                        name='email'
                        type='email'
                        onChange={handleChange}
                        required/>
                </div>
                <div>
                    <input 
                    placeholder='password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                    required/>
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <div>
                    <p>Already have an account? <Link to="/user/login">Log in</Link></p>
                </div>
                <div>
                    <p>Sign Up with google</p>

                </div>
            </form>
        </div>

    )
}

