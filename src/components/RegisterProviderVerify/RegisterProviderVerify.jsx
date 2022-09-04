import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function RegisterProviderForm() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const [newPath, setNewPath] = useState('');
    const [providerName, setProviderName]= useState('');
    const [providerBio, setProviderBio]= useState('');
    const [providerPhone, setProviderPhone]= useState('');
    const [providerEmail, setProviderEmail]= useState('');
    // const [providerWebsite, setProviderWebsite]= useState('');
    const [providerInsurance, setProviderInsurance]= useState('');
    const [providerOccupation, setProviderOccupation]= useState('');
    const [providerSpecialization, setProviderSpecialization]= useState('');
    const [providerService, setProviderService]= useState('');
    const [providerAvailability, setProviderAvailability]= useState('');

    // const addFile = (event) => setNewPath(event.target.files[0]);

    // const sendImage = (event) => {
	// 	const data = new FormData();
		
	// 	data.append('image', newPath);

	// 	axios
	// 		.post('api/provider/image', data)
	// 		.then((response) => {
	// 			console.log(response);
	// 		})
	// 		.catch((error) => {
	// 			alert('Error with post', error);
	// 		});
	// };

    const registerProvider = () => {
            sendImage();
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
                
            </div>
            <LogOutButton className="btn" />
        </center>
    );
}