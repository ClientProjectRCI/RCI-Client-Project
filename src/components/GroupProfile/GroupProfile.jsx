import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { put } from 'redux-saga/effects';

export default function GroupProfile() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);

    function registerGroup() {
        console.log('Group registered!');
    }

    return (
        <form className="container" onSubmit={registerGroup}>
            <h2>Welcome, {user.username}!</h2>
            <p>GroupProfile: Your ID is: {user.id}</p>
            <LogOutButton className="btn" />
            <input placeholder="Name"></input>
            <input placeholder="Description"></input>
            <input placeholder="Address"></input>
            <input placeholder="Website"></input>
            <input placeholder="Email"></input>
            <input placeholder="Phone Number"></input>
            {/* <button>Submit</button> */}
        </form>
    );
}
