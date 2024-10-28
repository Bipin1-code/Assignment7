import React, { useState } from 'react';
import './SignIn.css'; 

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }
        
        console.log('Sign in with:', { email, password });
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <div className="signin-container">
            <h1>Welcome Back!</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="signin-button">Sign In</button>
            </form>
            <p className="signup-link">
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    );
};

export default SignIn;
