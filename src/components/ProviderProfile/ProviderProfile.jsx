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

export default function ProviderProfile() {

    const user = useSelector(store => store.user); // pulls user info for conditional rendering, and GETTING provider info
    const details = useSelector((store) => store.details); // Pulls a single Providers info from the "Details" store
    const [edit, setEdit] = useState(false); // edit buttons local state. Starts as false.
    const history = useHistory()
    const dispatch = useDispatch();

    console.log("user:", user); // test user info
    console.log("edit useState:", edit); // tests EDIT local state, starts as FALSE


    // -- NOTE - No functionality for actually submitting the edited profile info to the DB -- //

    const toggleEdit = () => { // Toggle the EDIT useState between TRUE & FALSE. 
        setEdit(current => !current);
    };
    dispatch({ type: 'FETCH_PROVIDER_DETAILS', payload: user.id })
    useEffect(() => {
        dispatch({ type: 'FETCH_PROVIDER_DETAILS', payload: user.id })
        // dispatch({ type: 'FETCH_PROVIDER_SPECIALIZATIONS', payload: user.id });
        // dispatch({ type: 'FETCH_PROVIDER_OCCUPATIONS', payload: user.id });
        // dispatch({ type: 'FETCH_PROVIDER_INSURANCES', payload: user.id });
        // dispatch({ type: 'FETCH_PROVIDER_SERVICES', payload: user.id });

    }, []);


    return (

        <div className="row">

            <div>
            </div>
            <div className="column">
                <img
                    style={{ borderRadius: 20 }}
                    src="https://static.wixstatic.com/media/3d076e_adb70c8b93b845f1b93d50028c5013e8~mv2.jpeg/v1/crop/x_0,y_727,w_1242,h_1173/fill/w_412,h_389,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/695BF34C-4BAC-4D41-85DD-95CE130DAA57%20-%20S.jpeg"
                />

                <div> {/* this div controller the "EDIT" buttons conditional rendering*/}
                    <Button item variant="contained">Email</Button>
                    {edit
                        ? <Button item variant="outlined"
                            onClick={toggleEdit}
                        >Submit Your Changes</Button>
                        : <Button item variant="contained"
                            onClick={toggleEdit}
                        >Edit Profile Info</Button>
                    }
                </div>


            </div>
            <div>{/* this div controls the "Input fields & Info" conditional rendering*/}
                {edit
                    ? <div>   {/* "?" - If TRUE, show input editable fields  */}
                        <div className="column">
                            <h3>You Are Editing Your Profile Info</h3>
                            <TextField
                                label={"Edit Provider Name"}
                            ></TextField>
                            <TextField
                                label={"Edit Occupation"}
                            ></TextField>
                            <TextField
                                label={"Edit Bio"}
                            ></TextField>
                            <TextField
                                label={"Edit Insurance"}
                            ></TextField>
                        </div>
                        <div className="column">
                            <TextField
                                label={"Edit Phone number"}
                            ></TextField>
                            <TextField
                                label={"Edit Services"}
                            ></TextField>
                            <TextField
                                label={"Edit Specialties"}
                            ></TextField>

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
                                <h4>Services:</h4>
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
