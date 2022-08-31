import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function RegisterProviderForm() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);
    const history = useHistory();

    function registerProvider() {
        console.log('Provider registered!');
        // POST to provider table
        // history.push to provider's id
        history.push(`/provider`);
    }

    return (
        <center>
            <form className="container" onSubmit={registerProvider}>
                <h2>Welcome, {user.username}!</h2>
                <p>ProviderProfile: Your ID is: {user.id}</p>
                <input required type="text" placeholder="Name"></input>
                <input required type="text" placeholder="Bio"></input>
                {/* picture */}
                <input required type="text" placeholder="Insurance"></input>
                <input required type="text" placeholder="Occupation"></input>
                <input
                    required
                    type="text"
                    placeholder="Specialization(s)"
                ></input>
                <input required type="text" placeholder="Service"></input>
                <input required type="date" placeholder="Availability"></input>
                <input required type="text" placeholder="Email"></input>
                <input required type="text" placeholder="Website"></input>
                <input required type="text" placeholder="Phone Number"></input>
                <button onClick={registerProvider}>Submit</button>
            </form>
            <LogOutButton className="btn" />
        </center>
    );
}
