import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();
    const history = useHistory();

    const registerUser = (event) => {
        event.preventDefault();

        dispatch({
            type: 'REGISTER',
            payload: {
                username: username,
                password: password,
                // acccesslevel: set default for group and provider
            },
        });
    }; // end registerUser

    return (
        <form className="formPanel" onSubmit={registerUser}>
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

            {/* <form>
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
            </form> */}

            <div>
                <input
                    className="btn"
                    type="submit"
                    name="submit"
                    value="Provider"
                    onClick={() => {
                        history.push('/group');
                    }}  //changes made here
                />
                <input
                    className="btn"
                    type="submit"
                    name="submit"
                    value="Group"
                    onClick={() => {
                        history.push('/group');
                    }} //changes made here
                />
            </div>
        </form>
    );
}
