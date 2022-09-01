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

        dispatch({
            type: 'REGISTER',
            payload: {
                username: username,
                password: password,
                access_level: 3, // hardcode access_level 3 for provider
            },
        });
    }; // end registerUser

    const registerProvider = (event) => {
        event.preventDefault();

        dispatch({
            type: 'REGISTER',
            payload: {
                username: username,
                password: password,
                access_level: 2, // hardcode access_level 2 for provider
            },
        });
    }; // end registerUser

    const handleGroupRegister = (event) => {
        event.preventDefault();
        // register the user
        registerGroup(event); // calls "registersGroup function"
        // navigate to group register profile
        history.push('/register-group');
    };

    const handleProviderRegister = (event) => {
        event.preventDefault();
        // register the user
        registerProvider(event); // calls "registerProvider function"
        //navigate to provider profile
        history.push('/register-provider');
    };

    {
        /* <form>
            <h2>Are you a Group or Provider?</h2>

            <input
                type="radio"
                id="provider"
                name="provider_group"
                value="provider"
            />
            <label for="provider">Provider</label>

            <input
                type="radio"
                id="group"
                name="provider_group"
                value="group"
            />
            <label for="group">Group</label>
        </form> */
    }

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
                    onClick={handleProviderRegister}
                />
                <input
                    className="btn"
                    type="submit"
                    name="submit"
                    value="Group"
                    onClick={handleGroupRegister}
                />
            </div>
        </form>
    );
}
