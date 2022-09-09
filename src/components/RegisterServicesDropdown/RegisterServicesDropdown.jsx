import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
function getStyles(specializations, specialization, theme) {
  return {
    fontWeight:
      specializations.indexOf(specialization) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function RegisterSpecializationsDropdown() {
   const theme = useTheme();
  const dispatch = useDispatch();
  //state for the text box for the provider
  const specializations = useSelector((store) => store.specializations);
  const [providerSpecialization, setProviderSpecialization] = useState([]);

  const handleChange = (event) => {
   
    const {
      target: { value },
    } = event;
    setProviderSpecialization(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
     console.log('Here is the event', event.target.value);
      console.log('Here is the filterSpecializations', providerSpecialization);

  };

  function handleSelectedSpecializationsSubmit(event) {
    console.log(
      'Dispatching Specialization:',
      providerSpecialization
    );
   dispatch({
     type: 'ADD_PROVIDER_SPECIALIZATION',
     payload: providerSpecialization
     },
   );
  }

  return (
    <div>
      {/* specialization dropdown menu */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-specializations-label">
          Specializations
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={providerSpecialization}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {specializations.map((specialization) => (
            <MenuItem
              key={specialization.specialization}
              value={specialization.specialization}
              style={getStyles(specializations, providerSpecialization, theme)}
            >
              {specialization.specialization}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ButtonGroup
        variant="contained"
        size="large"
        aria-label="outlined primary button group"
      >
        <Button type="submit" onClick={handleSelectedSpecializationsSubmit}>
          add
        </Button>
      </ButtonGroup>
    
    </div>
  );
}

export default RegisterSpecializationsDropdown;