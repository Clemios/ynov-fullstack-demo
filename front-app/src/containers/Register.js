import { request } from "../helpers/request";
import { useState } from "react";


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        try {
            request.post('/users/auth/register', {
                email: email,
                password: password
            }).then((response) => {
                // in case of success, save the token to local storage or cookie here
                console.log(response);
            }).catch((error) => {
                // ce catch retoutne l'erreur de la promise au try catch ci-dessus
                console.error('Error registering:', error);
            });
        } catch (error) {
            console.error('Error registering:', error);
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={(e) => handleRegister(e)}>Register</button>
        </div>
    );
};

export default Register;