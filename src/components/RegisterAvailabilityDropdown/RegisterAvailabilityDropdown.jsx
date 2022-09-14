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
import { TextField } from '@mui/material';

function RegisterAvailabilityDropdown() {
    const theme = useTheme();
    const dispatch = useDispatch();
    //state for the text box for the provider
    const availabilities = useSelector((store) => store.availability);
    const [providerAvailability, setProviderAvailability] = useState('');

    // const handleChange = (event) => {

    //   const {
    //     target: { value },
    //   } = event;
    //   setProviderAvailability(
    //     // On autofill we get a stringified value.
    //     typeof value === 'string' ? value.split(',') : value
    //   );
    //    console.log('Here is the event', event.target.value);
    //     console.log('Here is the filterSpecializations', providerAvailability);

    // };

    function handleSelectedAvailabilitySubmit(event) {
        event.preventDefault();
        console.log('Dispatching Availability:', providerAvailability);
        dispatch({
            type: 'ADD_PROVIDER_AVAILABILITY',
            payload: providerAvailability,
        });
    }

    return (
        <div>
            {/* specialization dropdown menu */}
            {/* <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-specializations-label">
          Availability
        </InputLabel>
        <Select
          multiple
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={providerAvailability}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {availabilities.map((availability) => (
            <MenuItem
              key={availability.id}
              value={availability.id}
              style={{
                                width: 'fit-content',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
            >
              {availability.availability}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
            <form className="name" onSubmit={handleSelectedAvailabilitySubmit}>
                <TextField
                    sx={{ width: 300, paddingRight: 1 }}
                    id="provider-availability"
                    value={providerAvailability}
                    onChange={(event) => {
                        setProviderAvailability(event.target.value);
                    }}
                    label="Type in your availability"
                    variant="outlined"
                    placeholder="Search..."
                    size="medium"
                />
                <ButtonGroup
                    variant="contained"
                    size="large"
                    aria-label="outlined primary button group"
                >
                    <Button
                        type="submit"
                        onClick={handleSelectedAvailabilitySubmit}
                    >
                        add
                    </Button>
                </ButtonGroup>
            </form>
        </div>
    );
}

export default RegisterAvailabilityDropdown;
