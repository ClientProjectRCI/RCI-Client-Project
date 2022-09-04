import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function RegisterProviderForm() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const [newPath, setNewPath] = useState('');

    const addFile = (event) => setNewPath(event.target.files[0]);

    const sendImage = (event) => {
		const data = new FormData();
		
		data.append('image', newPath);

		axios
			.post('api/provider/image', data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				alert('Error with post', error);
			});
	};

    function registerProvider() {
            sendImage();
        // POST to provider table
            axios({
                method: 'POST',
                url: '/api/notes',
                data: {
                    userId: userId,
                    date: reviewDate, 
                    whiskeyName: whiskeyName,
                    whiskeyAbv: whiskeyAbv,
                    whiskeyStyle: whiskeyStyle,
                    whiskeyCountry: whiskeyCountry, 
                    whyThisWhiskey: whyThisWhiskey, 
                    aromaRating: aromaRating, 
                    aromaNotes: aromaNotes, 
                    flavorRating: flavorRating, 
                    flavorNotes: flavorNotes,
                    overallNotes: overallNotes,
                    buyAgain: buyAgain,
                    overallRating: overallRating
                }
            })
            .then(() => {
                dispatch({ type: 'FETCH_NOTES' });
            })
            .catch((err) => {
                console.log(`ERR in POST`, err)
            })
        // history.push to provider's id
        history.push(`/provider`);
    }

    return (
        <center>
            <form className="container" encType="multipart/form-data" onSubmit={registerProvider}>
                <h2>Welcome, {user.username}!</h2>
                <p>ProviderProfile: Your ID is: {user.id}</p>
                <input required type="text" placeholder="Name" value={providerName}></input>
                <input required type="text" placeholder="Bio" value= {providerBio}></input>
                {/* picture */}
                <input required type="text" placeholder="Insurance" value={providerInsurance}></input>
                <input required type="text" placeholder="Occupation" value={providerOccupation}></input>
                <input
                    required
                    type="text"
                    placeholder="Specialization(s)"
                    value={providerSpecialization}
                ></input>
                <input required type="text" placeholder="Service" value={providerService}></input>
                <input required type="date" placeholder="Availability" value={providerAvailability}></input>
                <input required type="text" placeholder="Email" value={providerEmail}></input>
                <input required type="text" placeholder="Website" value={providerWebsite}></input>
                <input required type="text" placeholder="Phone Number" value={providerPhone}></input>
                <input type="file" className="file-upload" name="profile-image" onChange={addFile}></input>
                <button onClick={registerProvider}>Submit</button>
            </form>
            <LogOutButton className="btn" />
        </center>
    );
}
