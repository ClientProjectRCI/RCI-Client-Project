import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

export default function RegisterGroupForm() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);

    function registerGroup() {
        console.log('Group registered!');
        // POST to group table
        // history.push to provider's id
        history.push(`/group`);
    }

    return (
        <center>
            <form className="container" onSubmit={registerGroup}>
                <h2>Welcome, {user.username}!</h2>
                <p>GroupProfile: Your ID is: {user.id}</p>
                <input required type="text" placeholder="Name"></input>
                <input required type="text" placeholder="Description"></input>
                <input required type="text" placeholder="Address"></input>
                <input required type="text" placeholder="Website"></input>
                <input required type="text" placeholder="Email"></input>
                <input required type="text" placeholder="Phone Number"></input>
                <button onClick={registerGroup}>Submit</button>
            </form>
            <LogOutButton className="btn" />
        </center>
    );
}
