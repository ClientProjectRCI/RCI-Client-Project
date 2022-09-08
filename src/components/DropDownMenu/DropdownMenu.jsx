import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function DropdownMenu() {
  const dispatch = useDispatch();
  //state for the text box for the provider

 

  const [filterSpecializations, setFilterSpecializations] = useState(['']);

  function handleFilterSpecializationsSubmit(e) {
    console.log('Searching by filterSpecialization:', filterSpecializations);
    //  dispatch({
    //    type: 'FILTER_PROVIDER_SPECIALIZATIONS',
    //    payload: {
    //      className: e.target.className,
    //      searchItem: name,
    //    },
    //  });
  }

  return (
    <div>
      <Box>
        <Stack spacing={3} sx={{ width: 500 }}></Stack>
        <Autocomplete
          multiple
          required
          id="tags-outlined"
          options={specializations}
          getOptionLabel={(specializations) => specializations.specialization}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Specializations"
              value={specializations}
              onChange={(e) => setFilterSpecializations(e.target.value)}
              placeholder="Specializations"
            />
          )}
        />
        <ButtonGroup
          variant="contained"
          size="large"
          aria-label="outlined primary button group"
        >
          <Button type="submit" onSubmit={handleFilterSpecializationsSubmit}>
            filter
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default DropdownMenu;
