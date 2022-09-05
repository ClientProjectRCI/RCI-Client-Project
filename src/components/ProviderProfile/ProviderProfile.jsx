import React, { useState } from 'react';
import '../ProviderProfile/ProviderProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';
import { Box, Button, Grid, Paper, TextField, Typography, Tooltip, Input } from '@mui/material';

export default function ProviderProfile() {

    const user = useSelector(store => store.user); // pulls user info for conditional rendering, and GETTING provider info
    const [edit, setEdit] = useState(false); // edit buttons local state. Starts as false.

    console.log("user:", user); // test user info
    console.log("edit useState:", edit); // tests edit local state, starts as false


// NOTE - Eventually there will be additional functions 
    // 1. for the "edit profile info" button. It will render the input fields
    // 2. for the "submit your changes" button.  It will save/submit edits to profile,
        // and will re-render all info as non-editable div's.

    const toggleEdit = () => { 
        setEdit(current => !current);

        console.log("TIME TO EDIT INFO", edit);

    };





    return (

        <div className="row">

            <div>
            </div>
            <div className="column">
                <img
                    style={{ borderRadius: 20 }}
                    src="https://static.wixstatic.com/media/3d076e_adb70c8b93b845f1b93d50028c5013e8~mv2.jpeg/v1/crop/x_0,y_727,w_1242,h_1173/fill/w_412,h_389,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/695BF34C-4BAC-4D41-85DD-95CE130DAA57%20-%20S.jpeg"
                />

                {/* <div>
                    {user.access_level === 2 && (
                        <div>
                            <Button item variant="contained"
                                onClick={toggleEdit}
                            >Edit Profile Info</Button>
                        </div>
                    )}
                </div> */}

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
                                label={"Edit Specialities"}
                            ></TextField>
                        
                        </div>
                    </div>
                    :  
                    <div> {/* ":" - If FALSE, show input editable fields  */}
                        <div className="column">
                            <div className="info">Name / Occupation</div>
                            <div className="info">Bio</div>
                            <div className="info">Insurance</div>
                        </div>
                        <div className="column">
                            <div className="info">Phone number</div>
                            <ul className="info">
                                <h4>Services:</h4>
                                <li>Phone</li>
                                <li>Online</li>
                                <li>In-Patient</li>
                                <li>Out-Patient</li>
                            </ul>
                            <ul className="info">
                                <h4>Specialities:</h4>
                                <li>specialty 1</li>
                                <li>specialty 2</li>
                                <li>specialty 3</li>
                               
                            </ul>
                        </div>

                    </div>
                }




            </div>


        </div>
    );
}
