import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function RegisterProviderVerify() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const providerName = useSelector((store) => store.providers.providerNameReducer);



    const registerProvider = () => {
        // POST to provider table
            axios({
                method: 'POST',
                url: '/api/providers',
                data: {
                    user_id: user.id,
                    name: providerName, 
                    bio: providerBio,
                    picture: newPath.name,
                    phone: providerPhone,
                    email: providerEmail,
                    insurance_id: providerInsurance,
                    occupation_id: providerOccupation,
                    specialization_id: providerSpecialization,
                    service_id: providerService,
                    availability: providerAvailability
                }
            })
            .then(() => {
                dispatch({ type: 'FETCH_PROVIDER_DETAILS' });
            })
            .catch((err) => {
                console.log(`ERR in POST`, err)
            })
        // history.push to provider's id
        history.push(`/provider`);
    }

    return (
        <center>
            <div className="container" >
                <h2>Welcome, {user.username}!</h2>
                <p>ProviderProfile: Your ID is: {user.id}</p>
                <table>
                    <thead>
                        <tr>
                        <th>Field</th>
                        <th>Your Response</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Date entered:</td><td> { reviewDate }</td></tr>
                        <tr><td>Whiskey Name:</td><td> {whiskeyName}</td></tr>
                        <tr><td>ABV: </td><td>{whiskeyAbv}</td></tr>
                        <tr><td>Style:</td><td> {whiskeyStyle}</td></tr>
                        <tr><td>Country of Origin:</td><td> {whiskeyCountry}</td></tr>
                        <tr><td>Why this bottle?: </td><td>{whyThisWhiskey}</td></tr>
                        <tr><td>Aroma Rating:</td><td> {aromaRating}</td></tr>
                        <tr><td>Aroma Notes:</td><td> {aromaNotes}</td></tr>
                        <tr><td>Flavor Rating: </td><td>{flavorRating}</td></tr>
                        <tr><td>Flavor Notes: </td><td>{flavorNotes}</td></tr>
                        <tr><td>Overall Notes: </td><td>{overallNotes}</td></tr>
                        <tr><td>Would you buy this again?: </td><td>{buyAgain}</td></tr>
                        <tr><td>Overall Rating of this whiskey: </td><td>{overallRating}</td></tr>
                    </tbody>
                </table>
                <button className="click" type="submit" onClick={registerProvider}>Submit</button>
            </div>
            <LogOutButton className="btn" />
        </center>
    );
}