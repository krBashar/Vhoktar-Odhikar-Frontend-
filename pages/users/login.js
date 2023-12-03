import { useState } from 'react';



export default function LoginForm () {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

    // Perform form validation
    if (!email || !password) {
        setError('Email and password are required');
    } else if (!isValidEmail(email)) {
        setError('Invalid email address');
    } else {
        console.log({ email, password });
        setEmail('');
        setPassword('');
        setError('');
    }
    };

    const isValidEmail = (email) => {
        const emailPattern = /^\S+@\S+\.\S+$/;
        return emailPattern.test(email);
    };

    return (
    <>

    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <div>
        <label>Email</label>
        <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
        />
    </div>
    <div>
        <label>Password</label>
        <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
        />
    </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
    </form>
    </>
);};
    