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
function getStyles(occupations, occupation, theme) {
  return {
    fontWeight:
      occupations.indexOf(occupation) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function OccupationsDropdownMenu() {
  const theme = useTheme();
  const dispatch = useDispatch();
  //state for the text box for the provider
  const occupations = useSelector((store) => store.occupations);
  const [filterOccupations, setFilterOccupations] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilterOccupations(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    console.log('Here is the event', event.target.value);
    console.log('Here is the filteroccupations', filterOccupations);
  };

  function handleFilterOccupationsSubmit(event) {
    console.log('Dispatching this filteroccupations:', filterOccupations);
    dispatch({
      type: 'FILTER_PROVIDER_OCCUPATIONS',
      payload: { occupation: filterOccupations },
    });
  }

  return (
    <div>
      {/* specialization dropdown menu */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-occupations-label">Occupations</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={filterOccupations}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {occupations.map((occupation) => (
            <MenuItem
              key={occupation.occupation}
              value={occupation.occupation}
              style={getStyles(occupations, filterOccupations, theme)}
            >
              {occupation.occupation}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ButtonGroup
        variant="contained"
        size="large"
        aria-label="outlined primary button group"
      >
        <Button type="submit" onClick={handleFilterOccupationsSubmit}>
          filter
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default OccupationsDropdownMenu;
