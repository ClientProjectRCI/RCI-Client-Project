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


export default function RegisterProviderForm() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    // const [providerPicture, setProviderPicture] = useState('');
    const [providerName, setProviderName] = useState('');
    const [providerBio, setProviderBio] = useState('');
    const [providerPhone, setProviderPhone] = useState('');
    const [providerEmail, setProviderEmail] = useState('');
    // const [providerWebsite, setProviderWebsite]= useState('');
    const [providerInsurance, setProviderInsurance] = useState([]);
    const [providerOccupation, setProviderOccupation] = useState([]);
    const [providerSpecialization, setProviderSpecialization] = useState([]);
    const [providerService, setProviderService] = useState([]);
    const [providerAvailability, setProviderAvailability] = useState([]);

    const specializations = useSelector((store) => store.specializations);
    const insurances = useSelector((store) => store.insurances);
    const occupations = useSelector((store) => store.occupations);
    const services = useSelector((store) => store.services);
    const availabilities = useSelector((store) => store.availability);

    useEffect(() => {
      dispatch({ type: 'FETCH_PROVIDERS' });
      dispatch({ type: 'FETCH_GROUPS' });
      dispatch({ type: 'FETCH_SPECIALIZATIONS' });
      dispatch({ type: 'FETCH_INSURANCES' });
      dispatch({ type: 'FETCH_OCCUPATIONS' });
      dispatch({ type: 'FETCH_AVAILABILITY'});
      dispatch({ type: 'FETCH_SERVICES'});
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
        // dispatch ({
        //     type: 'ADD_PROVIDER_PICTURE',
        //     payload: providerPicture
        // })
        dispatch({
            type: 'ADD_PROVIDER_PHONE',
            payload: providerPhone,
        });
        dispatch({
            type: 'ADD_PROVIDER_EMAIL',
            payload: providerEmail,
        });
        dispatch({
            type: 'ADD_PROVIDER_INSURANCE',
            payload: providerInsurance,
        });
        dispatch({
            type: 'ADD_PROVIDER_OCCUPATION',
            payload: providerOccupation,
        });
        dispatch({
            type: 'ADD_PROVIDER_SPECIALIZATION',
            payload: providerSpecialization,
        });
        dispatch({
            type: 'ADD_PROVIDER_SERVICE',
            payload: providerService,
        });
        dispatch({
            type: 'ADD_PROVIDER_AVAILABILITY',
            payload: providerAvailability,
        });

        history.push('/register-provider-verify');
    };

    return (
        <center>
            <form className="container">
                <h2>Welcome, {user.username}!</h2>
                <p>ProviderProfile: {user.id}</p>
                {/* <input
                    required
                    type="text"
                    placeholder="Name"
                    value={providerName}
                    onChange={(event) => setProviderName(event.target.value)}
                ></input> */}
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" 
                    label="Name" 
                    variant="outlined"
                    value={providerName}
                    onChange={(event) => setProviderName(event.target.value)}
                    />
                </Box>
                {/* <input
                    required
                    type="text"
                    placeholder="Bio"
                    value={providerBio}
                    onChange={(event) => setProviderBio(event.target.value)}
                ></input> */}
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" 
                    label="Bio"
                    multiline
                    maxRows={4} 
                    variant="outlined"
                    value={providerBio}
                    onChange={(event) => setProviderBio(event.target.value)}

                    />
                </Box>
                {/* <input
                    required
                    type="text"
                    placeholder="Insurance"
                    value={providerInsurance}
                    onChange={(event) =>
                        setProviderInsurance(event.target.value)
                    }
                ></input> */}
                <Box>
                  <Stack spacing={3} sx={{ width: '50ch' }}></Stack>
                  <Autocomplete
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    multiple
                    required
                    id="tags-outlined"
                    options={insurances}
                    getOptionLabel={(insurances) => insurances.insurance}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Insurances"
                        value={insurances}
                        onChange={(event) =>
                          setProviderInsurance(event.target.value)
                        }
                        placeholder="Insurances"
                      />
                    )}
                  />
                  {/* <ButtonGroup
                    variant="contained"
                    size="large"
                    aria-label="outlined primary button group"
                  >
                    <Button type="submit">add insurance</Button>
                  </ButtonGroup> */}
                </Box>
                <Box>
                  <Stack spacing={3} sx={{ width: 500 }}></Stack>
                  <Autocomplete
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    multiple
                    required
                    id="tags-outlined"
                    options={occupations}
                    getOptionLabel={(occupations) => occupations.occupation}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Occupations"
                        value={occupations}
                        onChange={(event) =>
                          setProviderOccupation(event.target.value)
                        }
                        placeholder="Occupations"
                      />
                    )}
                  />
                  {/* <ButtonGroup
                    variant="contained"
                    size="large"
                    aria-label="outlined primary button group"
                  >
                    <Button type="submit">add occupations</Button>
                  </ButtonGroup> */}
                </Box>
                {/* <input
                    required
                    type="text"
                    placeholder="Occupation"
                    value={providerOccupation}
                    onChange={(event) =>
                        setProviderOccupation(event.target.value)
                    }
                ></input> */}
                {/* <input
                    required
                    type="text"
                    placeholder="Specialization(s)"
                    value={providerSpecialization}
                    onChange={(event) =>
                        setProviderSpecialization(event.target.value)
                    }
                ></input> */}
                <Box>
                  <Stack spacing={3} sx={{ width: 500 }}></Stack>
                  <Autocomplete
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    multiple
                    required
                    id="tags-outlined"
                    options={specializations}
                    getOptionLabel={(specializations) =>
                      specializations.specialization
                    }
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Specializations"
                        value={specializations}
                        onChange={(event) =>
                          setProviderSpecialization(event.target.value)
                        }
                        placeholder="Specializations"
                      />
                    )}
                  />
                  {/* <ButtonGroup
                    variant="contained"
                    size="large"
                    aria-label="outlined primary button group"
                  >
                    <Button type="submit">add specializations</Button>
                  </ButtonGroup> */}
                </Box>
                {/* <input
                    required
                    type="text"
                    placeholder="Service"
                    value={providerService}
                    onChange={(event) => setProviderService(event.target.value)}
                ></input> */}
                <Box>
                  <Stack spacing={3} sx={{ width: 500 }}></Stack>
                  <Autocomplete
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    multiple
                    required
                    id="tags-outlined"
                    options={services}
                    getOptionLabel={(services) =>
                      services.service
                    }
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Services Offered"
                        value={services}
                        onChange={(event) =>
                          setProviderService(event.target.value)
                        }
                        placeholder="Services"
                      />
                    )}
                  />
                  {/* <ButtonGroup
                    variant="contained"
                    size="large"
                    aria-label="outlined primary button group"
                  >
                    <Button type="submit">add specializations</Button>
                  </ButtonGroup>  */}
                </Box>
                
                {/* <input
                    required
                    type="text"
                    placeholder="Availability"
                    value={providerAvailability}
                    onChange={(event) =>
                        setProviderAvailability(event.target.value)
                    }
                ></input> */}
                <Box>
                  <Stack spacing={3} sx={{ width: 500 }}></Stack>
                  <Autocomplete
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    multiple
                    required
                    id="tags-outlined"
                    options={availabilities}
                    getOptionLabel={(availabilities) =>
                      availabilities.availability
                    }
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Availability"
                        value={availabilities}
                        onChange={(event) =>
                          setProviderAvailability(event.target.value)
                        }
                        placeholder="Availability"
                      />
                    )}
                  />
                </Box>
                {/* <input
                    required
                    type="text"
                    placeholder="Email"
                    value={providerEmail}
                    onChange={(event) => setProviderEmail(event.target.value)}
                ></input> */}
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" 
                    label="E-mail address" 
                    variant="outlined"
                    value={providerEmail}
                    onChange={(event) => setProviderEmail(event.target.value)}

                    />
                    </Box>
                {/* <input required type="text" 
                placeholder="Website" 
                value={providerWebsite}
                onChange={(event) => setProviderWebsite(event.target.value)}
                ></input> */}
                {/* <input
                    required
                    type="text"
                    placeholder="Phone Number"
                    value={providerPhone}
                    onChange={(event) => setProviderPhone(event.target.value)}
                ></input><br /> */}
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" 
                    label="Phone number" 
                    variant="outlined"
                    value={providerPhone}
                    onChange={(event) => setProviderPhone(event.target.value)}

                    />
                    </Box>
                <button className="btn" onClick={verifyProvider}>
                    Go To Verify
                </button>
            </form>
            {/* <LogOutButton className="btn" /> */}
        </center>
    );
}
