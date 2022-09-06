import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function RegisterProviderVerify() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [providerPicture, setProviderPicture] = useState('');
    const providerName = useSelector((store) => store.providers.providerNameReducer);
    const providerBio = useSelector((store) => store.providers.providerBioReducer);
    // const providerPicture = useSelector((store) => store.providers.providerPictureReducer);
    const providerPhone = useSelector((store) => store.providers.providerPhoneReducer);
    const providerEmail = useSelector((store) => store.providers.providerEmailReducer);
    const providerInsurance = useSelector((store) => store.providers.providerInsuranceReducer);
    const providerOccupation = useSelector((store) => store.providers.providerOccupationReducer);
    const providerSpecialization = useSelector((store) => store.providers.providerSpecializationReducer);
    const providerService = useSelector((store) => store.providers.providerServiceReducer);
    const providerAvailability = useSelector((store) => store.providers.providerAvailabilityReducer);
    const groupId = useSelector((store) => store.user.id);

    const addFile = (event) => setProviderPicture(event.target.files[0]);

    const sendImage = (event) => {
        const data = new FormData();
		
		data.append('image', providerPicture);

        console.log('data is', data);

		axios
			.post('/api/providers/images', data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				alert('Error with post', error);
			});
    }


    const registerProvider = () => {
    
        // POST to provider table
            axios({
                method: 'POST',
                url: '/api/providers/',
                data: {
                    user_id: user.id,
                    name: providerName, 
                    bio: providerBio,
                    picture: providerPicture.name,
                    phone: providerPhone,
                    email: providerEmail,
                    insurance_id: providerInsurance,
                    occupation_id: providerOccupation,
                    specialization_id: providerSpecialization,
                    service_id: providerService,
                    availability: providerAvailability,
                    groupId: groupId
                }
            })
            .then(() => {
                dispatch({ type: 'FETCH_PROVIDER_DETAILS' });
            })
            .catch((err) => {
                console.log(`ERR in POST`, err)
            });
            sendImage();
        // history.push to provider's id
        history.push(`/provider`);
    }

    return (
        <center>
            <div className="container" >
                <h2>Welcome, {user.username}!</h2>
                <p>ProviderProfile: Your ID is: {user.id}</p>
                <form className="container" encType="multipart/form-data">
                <input type='file' 
                className='input' 
                name='image' 
                onChange={addFile}
                ></input>
                <table>
                    <thead>
                        <tr>
                        <th>Field</th>
                        <th>Your Response</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Name:</td><td> { providerName }</td></tr>
                        <tr><td>Bio:</td><td> {providerBio}</td></tr>
                        <tr><td>Phone: </td><td>{providerPhone}</td></tr>
                        <tr><td>E-mail:</td><td> {providerEmail}</td></tr>
                        <tr><td>Insurance accepted:</td><td> {providerInsurance}</td></tr>
                        <tr><td>Occupation: </td><td>{providerOccupation}</td></tr>
                        <tr><td>Specialization:</td><td> {providerSpecialization}</td></tr>
                        <tr><td>Services:</td><td> {providerService}</td></tr>
                        <tr><td>Availability: </td><td>{providerAvailability}</td></tr>
                    </tbody>
                </table>
                <button className="btn" type="submit" onClick={registerProvider}>Submit</button>
                </form>
            </div>
            <LogOutButton className="btn" />
        </center>
    );
}