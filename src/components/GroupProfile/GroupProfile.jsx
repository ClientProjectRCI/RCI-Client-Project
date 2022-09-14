import React, { useEffect, useState } from 'react';
import '../ProviderProfile/ProviderProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';
import { Box, Card, Button, Grid, Paper, TextField, Typography, Tooltip, Input } from '@mui/material';





export default function GroupProfile() {

    const user = useSelector(store => store.user); // pulls user info for conditional rendering, and GETTING provider info
    const details = useSelector((store) => store.details); // Pulls a single Provider info from the "Details" store
    const [edit, setEdit] = useState(false); // edit buttons local state. Starts as false.
    const history = useHistory()
    const dispatch = useDispatch();

    console.log("user:", user); // test user info
    console.log("edit useState:", edit); // tests EDIT local state, starts as FALSE




    const toggleEdit = () => { // Toggle the EDIT useState between TRUE & FALSE. 
        setEdit(current => !current);
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_GROUP_PROFILE', payload: user.id })


    }, []);


    return (
      <div className="row">
        <div className="column">
          <h1>Group Profile</h1>
          <img
            style={{
              width: 300,
              height: 300,
              margin: '1rem',
              borderRadius: 20,
            }}
            src={details.picture}
          />

          <div>
            {' '}
            {/* this div controller the "EDIT" buttons conditional rendering*/}
            <Button item variant="contained">
              Email
            </Button>
            {edit ? (
              <Button item variant="outlined" onClick={toggleEdit}>
                Submit Your Changes
              </Button>
            ) : (
              <Button item variant="contained" onClick={toggleEdit}>
                Edit Profile Info
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
              <div className="column">
                <h3>You Are Editing Your Profile Info</h3>
                <TextField label={'Edit Name'}></TextField>
                <TextField label={'Edit Bio'}></TextField>
                <TextField label={'Edit Website'}></TextField>
                <TextField label={'Edit Phone Number'}></TextField>
              </div>
              <div className="column">
                <TextField label={'Edit Street'}></TextField>
                <TextField label={'Edit City'}></TextField>
                <TextField label={'Edit State'}></TextField>
                <TextField label={'Edit Zipcode'}></TextField>
              </div>
            </div>
          ) : (
            <div className="row">
              {' '}
              {/* ":" - If FALSE, show Non-editable Text Below */}
              {/* COLUMN 1 */}
              <div className="column">
                <div className="info">{details.name}</div>
                <div className="info">{details.bio}</div>
                <div className="info">
                  <p>{details.street}</p>
                  <p>{details.city}</p>
                  <p>{details.state}</p>
                  <p>{details.zipcode}</p>
                </div>
              </div>
              {/* COLUMN 2 */}
              <div className="column">
                <div className="info">
                  <p>{details.website}</p>
                  <p>{details.email}</p>
                  <p>{details.phone}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
