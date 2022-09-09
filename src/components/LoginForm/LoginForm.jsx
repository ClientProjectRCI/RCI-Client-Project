import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();
    const history = useHistory();

    const login = (event) => {
        event.preventDefault();

        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
            dispatch({ type: 'FETCH_PROVIDER_PROFILE', payload: user.id });
        } else {
            dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
    }; // end login

    return (
        <>
            <form className="formPanel" onSubmit={login}>
                <h1>Login</h1>
                {errors.loginMessage && (
                    <h3 className="alert" role="alert">
                        {errors.loginMessage}
                    </h3>
                )}
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        className="btn"
                        type="submit"
                        name="submit"
                        value="Log In"
                    />
                </div>
            </form>
            <button
                type="button"
                className="btn btn_asLink"
                onClick={() => {
                    history.push('/registration');
                }}
            >
                Register
            </button>
        </>
    );
}
