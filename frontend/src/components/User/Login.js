import React, {useState, useEffect, useContext} from 'react';
import {supabase} from './client'
import { Link, useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


export default function Login() {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const [formData, setFormData] = useState({ email:'', password: '' });
    
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
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            }); 

            if (error) throw error;
            login(data);

            navigate('/');
            console.log(data);

        } catch (error) {
            alert(error)
        }
        
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
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
                    <button type="submit">Log in</button>
                </div>
                <div>
                    <p>Don't have an acount? <Link to="/user/signup">Sign Up</Link></p>
                </div>

            </form>
        </div>

    )
}

