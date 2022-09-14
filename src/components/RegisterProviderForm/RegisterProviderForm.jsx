import React, { useEffect, useState } from 'react';
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

export default function RegisterProviderForm() {
   
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [providerPicture, setProviderPicture] = useState('');
    const [providerName, setProviderName] = useState('');
    const [providerBio, setProviderBio] = useState('');
    const [providerPhone, setProviderPhone] = useState('');
    const [providerEmail, setProviderEmail] = useState('');
  
    useEffect(() => {
        dispatch({ type: 'FETCH_PROVIDERS' });
        dispatch({ type: 'FETCH_GROUPS' });
        dispatch({ type: 'FETCH_SPECIALIZATIONS' });
        dispatch({ type: 'FETCH_INSURANCES' });
        dispatch({ type: 'FETCH_OCCUPATIONS' });
     
        dispatch({ type: 'FETCH_SERVICES' });
    }, []);

    const verifyProvider = () => {
        dispatch({
            type: 'ADD_PROVIDER_NAME',
            payload: providerName,
        });
        dispatch({
            type: 'ADD_PROVIDER_BIO',
            payload: providerBio,
        });

        dispatch({
            type: 'ADD_PROVIDER_PHONE',
            payload: providerPhone,
        });
        dispatch({
            type: 'ADD_PROVIDER_EMAIL',
            payload: providerEmail,
        });

        history.push('/register-provider-verify');
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
                        value={providerName}
                        onChange={(event) =>
                            setProviderName(event.target.value)
                        }
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
                        value={providerBio}
                        onChange={(event) => setProviderBio(event.target.value)}
                    />
                </Box>

                <RegisterSpecializationsDropdown />

                <RegisterOccupationsDropdown />

                <RegisterServicesDropdown />

                <RegisterInsurancesDropdown />

                <RegisterAvailabilityDropdown />

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
                        value={providerEmail}
                        onChange={(event) =>
                            setProviderEmail(event.target.value)
                        }
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
                        value={providerPhone}
                        onChange={(event) =>
                            setProviderPhone(event.target.value)
                        }
                    />
                </Box>
                <button className="btn" onClick={verifyProvider}>
                    Review Information
                </button>
            </form>
        </center>
    );
}
