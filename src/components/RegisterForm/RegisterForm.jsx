import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();
    const history = useHistory();

    const registerGroup = (event) => {
        event.preventDefault();
        // register group
        dispatch({
            type: 'REGISTER',
            payload: {
                username: username,
                password: password,
                access_level: 3, // hardcode access_level 3 for group
            },
        });
        // navigate to group  profile
        history.push('/register-group');
    }; // end registerUser

    const registerProvider = (event) => {
        event.preventDefault();
        // register provider
        dispatch({
            type: 'REGISTER',
            payload: {
                username: username,
                password: password,
                access_level: 2, // hardcode access_level 2 for provider
            },
        });
        //navigate to provider profile
        history.push('/register-provider');
    }; // end provider register

    return (
        <form className="formPanel">
            <h1>Register</h1>
            {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                    {errors.registrationMessage}
                </h3>
            )}
            <div>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    required
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <input
                    className="btn"
                    type="submit"
                    name="submit"
                    value="Provider"
                    onClick={registerProvider}
                />
                <input
                    className="btn"
                    type="submit"
                    name="submit"
                    value="Group"
                    onClick={registerGroup}
                />
            </div>
        </form>
    );
}
