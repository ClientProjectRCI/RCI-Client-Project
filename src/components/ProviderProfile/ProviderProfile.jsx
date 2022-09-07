import React, { useEffect, useState } from 'react';
import '../ProviderProfile/ProviderProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';
import { Box, Card, Button, Grid, Paper, TextField, Typography, Tooltip, Input } from '@mui/material';
import ProviderSpecializations from '../ProviderSpecializations/ProviderSpecializations';
import ProviderInsurances from '../ProviderInsurances/ProviderInsurances';
import ProviderOccupations from '../ProviderOccupations/ProviderOccupations';
import ProviderServices from '../ProviderServices/ProviderServices';
import EditIcon from '@mui/icons-material/Edit';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SaveIcon from '@mui/icons-material/Save';

export default function ProviderProfile() {

    const user = useSelector(store => store.user); // pulls user info for conditional rendering, and GETTING provider info
    const details = useSelector((store) => store.details); // Pulls a single Provider info from the "Details" store
    const [edit, setEdit] = useState(false); // edit buttons local state. Starts as false.
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [occupation, setOccupation] = useState('');
    const [insurance, setInsurance] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [services, setServices] = useState('');
    const [specialities, setSpecialities] = useState('');
    const history = useHistory()
    const dispatch = useDispatch();

    console.log("user:", user); // test user info
    console.log("edit useState:", edit); // tests EDIT local state, starts as FALSE




    function handleChange(event) { 
        dispatch({ 
                    type: 'EDIT_ONCHANGE', 
                    payload: { property: 'github_name', value: event.target.value }
                });
    
      }


    function handleSubmit(event) { // PUT/UPDATE Dispatch
        event.preventDefault();

        console.log('usernameLocal', name);

 
        // dispatch({
        //     type: 'PUT_NAME',
        //     payload: {
        //         username: name,
        //         id: details.id
        //     }
        // });
        toggleEdit(); //
        // axios.put(`/api/settings${action.payload}`)
    }


    const toggleEdit = () => { // Toggle the EDIT useState between TRUE & FALSE. 
        console.log('submitted changes with a DISPATCH Function!');
        setEdit(current => !current);
    };
    // dispatch({ type: 'FETCH_PROVIDER_PROFILE', payload: user.id })
    useEffect(() => {
        dispatch({ type: 'FETCH_PROVIDER_PROFILE', payload: user.id })


    }, []);


    return (
        <div className="row">

            <div>
            </div>
            <div className="column">
                <img
                    style={{ borderRadius: 20 }}
                    src={details.picture}
                />

                <div> {/* this div controller the "EDIT" buttons conditional rendering*/}
                    <Button item variant="contained">Email</Button>
                    {edit
                        ? <Button item variant="outlined"
                            onClick={toggleEdit}
                        >Discard Changes <CancelPresentationIcon /></Button>
                        : <Button item variant="contained"
                            onClick={toggleEdit}
                        >Edit Profile Info <EditIcon /> </Button>
                    }
                </div>
            </div>

            <div>{/* this div controls the "Input fields & Info" conditional rendering*/}
                {edit
                    ? <div>   {/* "?" - If TRUE, show input editable fields  */}
                        <div className="column">
                            <h3>You Are Editing Your Profile Info</h3>
                            {/* NAME INPUT  */}
                            <form onSubmit={handleSubmit}>
                                <br></br>
                                <Grid container
                                    justifyContent="flex-start">

                                    <TextField label={"Edit Name"}
                                        placeholder={details.name}
                                        value={details.name}
                                        onChange={(event) => handleChange(event)} />
                                        
                                    <Button variant="contained" type='submit'>
                                        Submit
                                    </Button>


                                </Grid>
                            </form>
                            {/* BIO INPUT  */}
                            <form onSubmit={handleSubmit}>
                                <br></br>
                                <Grid container
                                    justifyContent="flex-start">
                                    <TextField label={"Edit Bio"}
                                        placeholder={details.bio}
                                        value={bio}
                                        onChange={(event) => setBio(event.target.value)} />
                                    <Button variant="contained" type='submit'>
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                            {/* Phone INPUT  */}
                            <form onSubmit={handleSubmit}>
                                <br></br>
                                <Grid container
                                    justifyContent="flex-start">
                                    <TextField label={"Edit Phone Number"}
                                        placeholder={details.phone}
                                        value={phone}
                                        onChange={(event) => setPhone(event.target.value)} />
                                    <Button variant="contained" type='submit'>
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                            {/* Insurance INPUT  */}
                            <form onSubmit={handleSubmit}>
                                <br></br>
                                <Grid container
                                    justifyContent="flex-start">
                                    <TextField label={"Edit Insurance"}
                                        placeholder={details.name}
                                        value={insurance}
                                        onChange={(event) => setInsurance(event.target.value)} />
                                    <Button variant="contained" type='submit'>
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                            {/* Occupation INPUT  */}
                            <form onSubmit={handleSubmit}>
                                <br></br>
                                <Grid container
                                    justifyContent="flex-start">
                                    <TextField label={"Edit Occupation"}
                                        placeholder={details.name}
                                        value={occupation}
                                        onChange={(event) => setOccupation(event.target.value)} />
                                    <Button variant="contained" type='submit'>
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                        </div>
                        {/* Services INPUT  */}
                        <form onSubmit={handleSubmit}>
                            <br></br>
                            <Grid container
                                justifyContent="flex-start">
                                <TextField label={"Edit Services"}
                                    placeholder={details.name}
                                    value={services}
                                    onChange={(event) => setServices(event.target.value)} />
                                <Button variant="contained" type='submit'>
                                    Submit
                                </Button>
                            </Grid>
                        </form>
                        <div className="column">
                            {/* Specialities INPUT  */}
                            <form onSubmit={handleSubmit}>
                                <br></br>
                                <Grid container
                                    justifyContent="flex-start">
                                    <TextField label={"Edit Specialities"}
                                        placeholder={details.name}
                                        value={specialities}
                                        onChange={(event) => setSpecialities(event.target.value)} />
                                    <Button variant="contained" type='submit'>
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="row"> {/* ":" - If FALSE, show Non-editable Text Below */}

                        {/* COLUMN 1 */}
                        <div className="column">
                            <div className="info">{details.name}</div>
                            <div className="info">{details.bio}</div>
                            <div className="info">
                                <h4>Insurance</h4>
                                <ProviderInsurances />
                            </div>
                            <div className="info">
                                <h4>Occupation</h4>
                                <ProviderOccupations />
                            </div>
                        </div>

                        {/* COLUMN 2 */}
                        <div className="column">
                            <ul className="info">
                                <h4>Contact Info:</h4>
                                <li>Availability: {details.availability}</li>
                                <li>Phone: {details.phone}</li>
                                <li>Email: {details.email}</li>
                                <h4>Services: </h4>
                                <ProviderServices />
                            </ul>
                            <ul className="info">
                                <h4>Specialties:</h4>
                                <ProviderSpecializations />
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
