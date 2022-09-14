import React, { useEffect, useState }  from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import axios from 'axios';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Grid from '@material-ui/core/Grid';
import RegisterInsurancesDropdown from '../RegisterInsurancesDropdown/RegisterInsurancesDropdown';
import RegisterOccupationsDropdown from '../RegisterOccupationsDropdown/RegisterOccupationsDropdown';
import RegisterSpecializationsDropdown from '../RegisterSpecializationsDropdown/RegisterSpecializationsDropdown';
import RegisterAvailabilityDropdown from '../RegisterAvailabilityDropdown/RegisterAvailabilityDropdown';
import RegisterServicesDropdown from '../RegisterServicesDropdown/RegisterServicesDropdown';


export default function RegisterGroupForm() {
 
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [groupName, setGroupName] = useState('');
    const [groupBio, setGroupBio] = useState('');
    const [groupPhone, setGroupPhone] = useState('');
    const [groupEmail, setGroupEmail] = useState('');
    const [groupWebsite, setGroupWebsite]= useState('');
    const [groupStreet, setGroupStreet] = useState('');
    const [groupCity, setGroupCity] = useState('');
    const [groupState, setGroupState] = useState('');
    const [groupZip, setGroupZip] = useState('');


    useEffect(() => {
      dispatch({ type: 'FETCH_PROVIDERS' });
      dispatch({ type: 'FETCH_GROUPS' });

    }, []);

    const verifyGroup = () => {

        dispatch({
            type: 'ADD_GROUP_NAME',
            payload: groupName,
        });
        dispatch({
            type: 'ADD_GROUP_BIO',
            payload: groupBio,
        });
        dispatch({
            type: 'ADD_GROUP_PHONE',
            payload: groupPhone,
        });
        dispatch({
            type: 'ADD_GROUP_EMAIL',
            payload: groupEmail,
        });
        dispatch({
            type: 'ADD_GROUP_STREET',
            payload: groupStreet,
        });
        dispatch({
            type: 'ADD_GROUP_WEBSITE',
            payload: groupWebsite,
        });
        dispatch({
            type: 'ADD_GROUP_CITY',
            payload: groupCity,
        });
        dispatch({
            type: 'ADD_GROUP_STATE',
            payload: groupState,
        });
        dispatch({
            type: 'ADD_GROUP_ZIP',
            payload: groupZip,
        });

        history.push('/register-group-verify');
    };

    return (
      <center>
        <form className="container" encType="multipart/form-data">
          <h2>Welcome, {user.username}!</h2>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={groupName}
              onChange={(event) => setGroupName(event.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Bio"
              multiline
              maxRows={4}
              variant="outlined"
              value={groupBio}
              onChange={(event) => setGroupBio(event.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="E-mail address"
              variant="outlined"
              value={groupEmail}
              onChange={(event) => setGroupEmail(event.target.value)}
            />
          </Box>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
              value={groupPhone}
              onChange={(event) => setGroupPhone(event.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Website"
              variant="outlined"
              value={groupWebsite}
              onChange={(event) => setGroupWebsite(event.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Street Address"
              variant="outlined"
              value={groupStreet}
              onChange={(event) => setGroupStreet(event.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="City"
              multiline
              maxRows={4}
              variant="outlined"
              value={groupCity}
              onChange={(event) => setGroupCity(event.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="State"
              variant="outlined"
              value={groupState}
              onChange={(event) => setGroupState(event.target.value)}
            />
          </Box>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Zip Code"
              variant="outlined"
              value={groupZip}
              onChange={(event) => setGroupZip(event.target.value)}
            />
          </Box>
          <button className="btn" onClick={verifyGroup}>
            Review Information
          </button>
        </form>
      </center>
    );
}
