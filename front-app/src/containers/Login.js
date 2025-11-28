import { setCookie } from '../helpers/cookie';
import { axiosPublicRequests } from '../helpers/request';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            axiosPublicRequests.post('/users/auth/login', {
                email: email,
                password: password
            }).then((response) => {
                console.log(response);
                setCookie('token', response.data.accessToken);
                // in case of success, save the token to local storage or cookie here
            }).catch((error) => {
                // ce catch retoutne l'erreur de la promise au try catch ci-dessus
                console.error('Error logging in:', error);
            });
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Click to login</button>
        </div>
    );
};

export default Login;