import { request } from '../helpers/request';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            request.post('/users/auth/login', {
                email: 'test@test.com',
                password: 'password123'
            }).then((response) => {
                console.log(response);
                // in case of success, save the token to local storage or cookie here
            }).catch((error) => {
                console.error('Error logging in:', error);
            });
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }

    return (
        <div>
            <button onClick={() => handleLogin()}>Click to login</button>
        </div>
    );
};

export default Login;