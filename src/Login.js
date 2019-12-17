import React from 'react';

class Login extends React.Component {
    render() {
        return (

            <div className="loginPanel">
                <label for="username">Username:
                    <input type="text" name="username" id="username" />
                </label>

                <label for="password">Password:
                    <input type="password" name="password" id="password" />
                </label>
                <div>
                    <button className="submitLogin" type="submit">
                        Login
                    </button>
                    <button className="resetPassword" type="button">
                        Reset Password
                    </button>
                </div>

            </div>

        )
    }
}

export default Login;