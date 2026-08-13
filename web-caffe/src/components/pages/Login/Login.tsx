import './Login.module.css';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import type React from 'react';

interface loginPayload {
    email: string,
    password: string,
}

const Login = () => {
    const handleLogin = async (event : React.SubmitEvent<HTMLFormElement>) => {
        event?.preventDefault();
        const form = event?.target as HTMLFormElement;
        const payload : loginPayload = {
            email: form.email.value,
            password: form.password.value,
        };
        fetch('https://wpu-cafe.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(payload)
        })
    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <Input name='email'id='email' type='email' label='Email'/>
            <br />
            <Input name='password'id='password' type='password' label='Password'/>
            <br />
            <Button type='submit'>Login</Button>
        </form>
    )
}

export default Login;