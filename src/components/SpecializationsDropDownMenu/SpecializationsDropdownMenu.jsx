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

function SpecializationsDropdownMenu() {
    const dispatch = useDispatch();
    //state for the text box for the provider
    const specializations = useSelector((store) => store.specializations);
    const [filterSpecializations, setFilterSpecializations] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFilterSpecializations(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
        console.log('Here is the event', event.target.value);
        console.log('Here is the filterSpecializations', filterSpecializations);
    };

    function handleFilterSpecializationsSubmit(event) {
        console.log(
            'Dispatching this filterSpecializations:',
            filterSpecializations
        );
        dispatch({
            type: 'FILTER_PROVIDER_SPECIALIZATIONS',
            payload: { specialization: filterSpecializations }, //specialization STRING
        });
    }

    return (
        <div>
            {/* specialization dropdown menu */}
            <FormControl sx={{ m: 1, width: 250 }}>
                <InputLabel id="multiple-specializations-label">
                    Specializations
                </InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={filterSpecializations}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                >
                    {specializations.map((specialization) => (
                        <MenuItem
                            key={specialization.specialization}
                            value={specialization.specialization}
                            style={{
                                width: 'fit-content',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
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
                <Button
                    type="submit"
                    onClick={handleFilterSpecializationsSubmit}
                >
                    filter
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default SpecializationsDropdownMenu;
