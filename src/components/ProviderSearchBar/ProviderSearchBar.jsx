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

function ProviderSearchBar() {
  const dispatch = useDispatch();
  //state for the text box for the provider

  const [name, setName] = useState('');
  const [searchItem, setSearchItem] = useState('');
  function handleSearchSubmit(e) {
    console.log('Searching by Name:', name);
    dispatch({
      type: 'SEARCH_PROVIDER_NAME',
      payload: {
        className: e.target.className,
        searchItem: name,
      },
    });
  }
  function handleRefresh() {
    console.log('you clicked refresh');
    dispatch({
      type: 'FETCH_PROVIDERS',
    });
  }



  return (
    <div>
      {/* text field for the provider */}
      <form className="name" onSubmit={handleSearchSubmit}>
        <TextField
          id="search-bar"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
      <IconButton type="click" aria-label="refresh" onClick={handleRefresh}>
        <RefreshIcon style={{ fill: 'blue' }} />
      </IconButton>
    </div>
  );
}

export default ProviderSearchBar;
