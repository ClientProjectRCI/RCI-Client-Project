import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(occupations, occupation, theme) {
  return {
    fontWeight:
      occupations.indexOf(occupation) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function RegisterServicesDropdown() {
  const theme = useTheme();
  const dispatch = useDispatch();
  //state for the text box for the provider
  const services = useSelector((store) => store.services);
  const [providerService, setProviderService] = useState('');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProviderService(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    console.log('Here is the event', event.target.value);
    console.log('Here is the selectedoccupations', providerService);
  };

  function handleSelectedServicesSubmit(event) {
    event.preventDefault();
    console.log('Dispatching this selectedoccupations:', providerService);
    dispatch({
      type: 'ADD_PROVIDER_SERVICE',
      payload: providerService,
    });
  }

  return (
    <div>
      {/* specialization dropdown menu */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-occupations-label">Services Offered</InputLabel>
        <Select
          // multiple
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={providerService}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          // renderValue={(selected) => (
          //   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          //     {selected.map((value) => (
          //       <Chip key={value} label={value} />
          //     ))}
          //   </Box>
          // )}
          MenuProps={MenuProps}
        >
          {services.map((service) => (
            <MenuItem
              key={service.id}
              value={service.id}
              onChange={handleSelectedServicesSubmit}
              style={getStyles(services, providerService, theme)}
            >
              {service.service}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ButtonGroup
        variant="contained"
        size="large"
        aria-label="outlined primary button group"
      >
        <Button type="submit" onClick={handleSelectedServicesSubmit}>
          add
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default RegisterServicesDropdown;