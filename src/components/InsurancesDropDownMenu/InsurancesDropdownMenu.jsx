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
function getStyles(insurances, insurance, theme) {
  return {
    fontWeight:
      insurances.indexOf(insurance) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function InsurancesDropdownMenu() {
  const theme = useTheme();
  const dispatch = useDispatch();
  //state for the text box for the provider
  const insurances = useSelector((store) => store.insurances);
  const [filterInsurances, setFilterInsurances] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilterInsurances(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    console.log('Here is the event', event.target.value);
    console.log('Here is the filterinsurances', filterInsurances);
  };

  function handleFilterInsurancesSubmit(event) {
    console.log('Dispatching this filterinsurances:', filterInsurances);
    dispatch({
      type: 'FILTER_PROVIDER_INSURANCES',
      payload: { insurance: filterInsurances },
    });
  }

  return (
    <div>
      {/* specialization dropdown menu */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-insurances-label">Insurances</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={filterInsurances}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {insurances.map((insurance) => (
            <MenuItem
              key={insurance.insurance}
              value={insurance.insurance}
              style={getStyles(insurances, filterInsurances, theme)}
            >
              {insurance.insurance}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ButtonGroup
        variant="contained"
        size="large"
        aria-label="outlined primary button group"
      >
        <Button type="submit" onClick={handleFilterInsurancesSubmit}>
          filter
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default InsurancesDropdownMenu;
