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
            <FormControl sx={{ m: 1, width: 250 }}>
                <InputLabel id="multiple-occupations-label">
                    Occupations
                </InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={filterOccupations}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                >
                    {occupations.map((occupation) => (
                        <MenuItem
                            key={occupation.occupation}
                            value={occupation.occupation}
                            style={{
                                width: 'fit-content',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
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
