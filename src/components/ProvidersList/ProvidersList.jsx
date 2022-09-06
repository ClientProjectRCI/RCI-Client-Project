import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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

import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Grid from '@material-ui/core/Grid';
import ProvidersListItem from '../ProvidersListItem/ProvidersListItem';
import GroupsListItem from '../GroupsListItem/GroupsListItem';
import './ProvidersList.css';
import SearchIcon from '@mui/icons-material/Search';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

//AVERY: DON'T TOUCH FILE

function ProvidersList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const providersReducer = useSelector((store) => store.providers);
  const providers = providersReducer.providersReducer
  const groups = useSelector((store) => store.groups);
  const specializations = useSelector((store) => store.specializations);
  const insurances = useSelector((store) => store.insurances);
  const occupations = useSelector((store) => store.occupations);
  //dispataches for the detail of the clicked on provider/group
  useEffect(() => {
    dispatch({ type: 'FETCH_PROVIDERS' });
    dispatch({ type: 'FETCH_GROUPS' });
    dispatch({ type: 'FETCH_SPECIALIZATIONS' });
    dispatch({ type: 'FETCH_INSURANCES' });
    dispatch({ type: 'FETCH_OCCUPATIONS' });
  }, []);


  return (
    <div>
      <body>
        <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
        <label for="drawer-toggle" id="drawer-toggle-label"></label>
        <header>
          
          <span>
            <span
              style={{
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                padding: 0,
                margin: 0,
              }}
            >
              <form>
                <TextField
                  id="search-bar"
                  className="text"
                  onInput={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  label="Search by Name"
                  variant="outlined"
                  placeholder="Search..."
                  size="small"
                />
                <IconButton type="submit" aria-label="search">
                  <SearchIcon style={{ fill: 'blue' }} />
                </IconButton>
              </form>
              <div style={{ padding: 0 }}>
               
              </div>
            </span>
          </span>
        </header>
        <nav id="drawer">
          <ul>
            <li>
              <Box>
                <Stack spacing={3} sx={{ width: 500 }}></Stack>
                <Autocomplete
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
                      // onChange={(event) =>
                      //   setSpecializations(event.target.value)
                      // }
                      placeholder="Specializations"
                    />
                  )}
                />
                <ButtonGroup
                  variant="contained"
                  size="large"
                  aria-label="outlined primary button group"
                >
                  <Button type="submit">filter</Button>
                </ButtonGroup>
              </Box>
            </li>
            <li>
              <Box>
                <Stack spacing={3} sx={{ width: 500 }}></Stack>
                <Autocomplete
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
                      // onChange={(event) =>
                      //   setInsurances(event.target.value)
                      // }
                      placeholder="Insurances"
                    />
                  )}
                />
                <ButtonGroup
                  variant="contained"
                  size="large"
                  aria-label="outlined primary button group"
                >
                  <Button type="submit">filter</Button>
                </ButtonGroup>
              </Box>
            </li>
            <li>
              <Box>
                <Stack spacing={3} sx={{ width: 500 }}></Stack>
                <Autocomplete
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
                      // onChange={(event) =>
                      //   setInsurances(event.target.value)
                      // }
                      placeholder="Occupations"
                    />
                  )}
                />
                <ButtonGroup
                  variant="contained"
                  size="large"
                  aria-label="outlined primary button group"
                >
                  <Button type="submit">filter</Button>
                </ButtonGroup>
              </Box>
            </li>
          </ul>
        </nav>
        <div id="page-content">
          <main>
            <h1>Provider</h1>
            <section
            //  className="providers"
            >
              <Grid container spacing={5}>
                {providers.map((provider) => (
                  <Grid item key={provider.id} xs={2}>
                    <ProvidersListItem provider={provider} />
                  </Grid>
                ))}
              </Grid>
            </section>
            <h1>Group</h1>
            <section
            //  className="providers"
            >
              <Grid container spacing={5}>
                {groups.map((group) => (
                  <Grid item key={group.id} xs={2}>
                    <GroupsListItem group={group} />
                  </Grid>
                ))}
              </Grid>
            </section>
          </main>
        </div>
      </body>
    </div>
  );
}

export default ProvidersList;
