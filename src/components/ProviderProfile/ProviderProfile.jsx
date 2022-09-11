import React, { useEffect, useState } from 'react';
import '../ProviderProfile/ProviderProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';
import {
    Box,
    Card,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
    Tooltip,
    Input,
} from '@mui/material';
import ProviderSpecializations from '../ProviderSpecializations/ProviderSpecializations';
// import ProviderInsurances from '../ProviderInsurances/ProviderInsurances';
import ProfileInsurances from '../ProfileInsurances/ProfileInsurances';
import ProfileOccupations from '../ProfileOccupations/ProfileOccupations';
import ProfileSpecializations from '../ProfileSpecializations/ProfileSpecializations';
import ProfileServices from '../ProfileServices/ProfileServices';

import ProviderOccupations from '../ProviderOccupations/ProviderOccupations';
import ProviderServices from '../ProviderServices/ProviderServices';
import EditIcon from '@mui/icons-material/Edit';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SaveIcon from '@mui/icons-material/Save';

export default function ProviderProfile() {
    const user = useSelector((store) => store.user); // pulls user info for conditional rendering, and GETTING provider info
    const details = useSelector((store) => store.details); // Pulls a single Provider info from the "Details" store
    const profile = useSelector((store) => store.profile); // Pulls a single Provider info from the "Details" store

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

    const history = useHistory();
    const dispatch = useDispatch();

    console.log('user:', user); // test user info
    console.log('user.id:', user.id); // test user info
    console.log('edit details:', details); // tests EDIT local state, starts as FALSE
    console.log('what is in the profile?????', profile);

    // This was to show what is in the DB above the inputs. Couldn't get it to work
    // function handleChange(event) {
    //     dispatch({
    //         type: 'EDIT_ONCHANGE',
    //         payload: { property: 'github_name', value: event.target.value }
    //     });

    // }

    function handleSubmit(event) {
        // PUT/UPDATE Dispatch
        event.preventDefault();
        // console.log('usernameLocal', name);
        console.log('profile:', profile);
        dispatch({
            type: 'EDIT_PROVIDER_PROFILE',
            payload: profile,
        });
        toggleEdit(); //
        // axios.put(`/api/settings${action.payload}`)
    }

    const toggleEdit = () => {
        // Toggle the EDIT useState between TRUE & FALSE.
        console.log('submitted changes with a DISPATCH Function!');
        setEdit((current) => !current);
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_PROVIDER_PROFILE', payload: user.id });
    }, []);
    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE_INSURANCES', payload: user.id });
    }, []);
    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE_OCCUPATIONS', payload: user.id });
    }, []);
    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE_SPECIALIZATIONS', payload: user.id });
    }, []);
    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE_SERVICES', payload: user.id });
    }, []);

    console.log(`What is profile.user_id`, user.id);

    return (
        <div className="row">
            <div></div>
            <div className="column">
                <img style={{ borderRadius: 20 }} src={profile.picture} />

                <div>
                    {' '}
                    {/* this div controller the "EDIT" buttons conditional rendering*/}
                    <Button item variant="contained">
                        Email
                    </Button>
                    {edit ? (
                        <Button item variant="outlined" onClick={toggleEdit}>
                            Discard Changes <CancelPresentationIcon />
                        </Button>
                    ) : (
                        <Button item variant="contained" onClick={toggleEdit}>
                            Edit Profile Info <EditIcon />{' '}
                        </Button>
                    )}
                </div>
            </div>

            <div>
                {/* this div controls the "Input fields & Info" conditional rendering*/}
                {edit ? (
                    <div>
                        {' '}
                        {/* "?" - If TRUE, show input editable fields  */}
                        <form onSubmit={handleSubmit}>
                            <div className="column">
                                <h3>You Are Editing Your Profile Info</h3>
                                <br></br>

                                {/* NAME INPUT  */}
                                <Typography fontWeight="bold">
                                    {profile.name}
                                </Typography>
                                <br></br>
                                <TextField
                                    label={'Edit Name'}
                                    placeholder={profile.name}
                                    value={profile.name}
                                    onChange={(event) =>
                                        dispatch({
                                            type: 'UPDATE_PROFILE',
                                            payload: {
                                                name: event.target.value,
                                            },
                                        })
                                    }
                                />
                                <br></br>

                                {/* Bio INPUT  */}
                                <Typography fontWeight="bold">
                                    {profile.bio}
                                </Typography>
                                <br></br>
                                <TextField
                                    label={'Edit Bio'}
                                    placeholder={profile.bio}
                                    value={profile.bio}
                                    onChange={(event) =>
                                        dispatch({
                                            type: 'UPDATE_PROFILE',
                                            payload: {
                                                bio: event.target.value,
                                            },
                                        })
                                    }
                                />
                                <br></br>

                                {/* Phone INPUT  */}
                                <Typography fontWeight="bold">
                                    {profile.phone}
                                </Typography>
                                <br></br>
                                <TextField
                                    label={'Edit Phone Number'}
                                    placeholder={profile.phone}
                                    value={profile.phone}
                                    onChange={(event) =>
                                        dispatch({
                                            type: 'UPDATE_PROFILE',
                                            payload: {
                                                phone: event.target.value,
                                            },
                                        })
                                    }
                                />
                                <br></br>

                                {/* Insurance INPUT  */}
                                <Typography fontWeight="bold">
                                    Insurance
                                </Typography>
                                {/* <ProviderInsurances /> */}
                                <TextField
                                    label={'Edit Insurance'}
                                    placeholder={details.name}
                                    value={insurance}
                                    onChange={(event) =>
                                        setInsurance(event.target.value)
                                    }
                                />
                                <br></br>

                                {/* Occupation INPUT  */}
                                <Typography fontWeight="bold">
                                    Occupation
                                </Typography>
                                <ProviderOccupations />
                                <br></br>
                                <TextField
                                    label={'Edit Occupation'}
                                    placeholder={profile.name}
                                    value={occupation}
                                    onChange={(event) =>
                                        setOccupation(event.target.value)
                                    }
                                />
                                <br></br>

                                {/* Services INPUT  */}
                                <Typography fontWeight="bold">
                                    Services
                                </Typography>
                                <br></br>
                                <TextField
                                    label={'Edit Services'}
                                    placeholder={profile.name}
                                    value={services}
                                    onChange={(event) =>
                                        setServices(event.target.value)
                                    }
                                />
                                <br></br>

                                {/* Specialities INPUT  */}
                                <Typography fontWeight="bold">
                                    Specialities
                                </Typography>
                                <br></br>
                                <TextField
                                    label={'Edit Specialities'}
                                    placeholder={profile.name}
                                    value={specialities}
                                    onChange={(event) =>
                                        setSpecialities(event.target.value)
                                    }
                                />
                                <br></br>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    onSubmit={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="row">
                        {' '}
                        {/* ":" - If FALSE, show Non-editable Text Below */}
                        {/* COLUMN 1 */}
                        <div className="column">
                            <div className="info">{profile.name}</div>
                            <div className="info">{profile.bio}</div>
                            <div className="info">
                                <h4>Insurance</h4>
                                <ProfileInsurances />
                            </div>
                            <div className="info">
                                <h4>Occupation</h4>
                                <ProfileOccupations />
                            </div>
                        </div>
                        {/* COLUMN 2 */}
                        <div className="column">
                            <ul className="info">
                                <h4>Contact Info:</h4>
                                <li>Availability: {profile.availability}</li>
                                <li>Phone: {profile.phone}</li>
                                <li>Email: {profile.email}</li>
                                <h4>Services: </h4>
                                <ProfileServices />
                            </ul>
                            <ul className="info">
                                <h4>Specialties:</h4>
                                <ProfileSpecializations />
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
