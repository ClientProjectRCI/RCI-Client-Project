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

function GroupSearchBar() {
  const dispatch = useDispatch();
  //state for the text box for the group
  const [name, setName] = useState('');

  const [searchItem, setSearchItem] = useState('');
  //search by group name function
  function handleGroupSearchSubmit(e) {
    console.log('Searching by Name:', name);
    dispatch({
      type: 'SEARCH_GROUP_NAME',
      payload: {
        className: e.target.className,
        searchItem: name,
      },
    });
  }
function handleRefresh(){
  console.log('you clicked refresh')
   dispatch({
     type: 'FETCH_GROUPS',
   });
}


  return (
    <div>
      
      {/* text field for the provider */}
      <form className="name" onSubmit={handleGroupSearchSubmit}>
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
        {/* refresh icon to get all groups again */}
      </form>
      <IconButton type="click" aria-label="refresh" onClick={handleRefresh}>
        <RefreshIcon style={{ fill: 'blue' }} />
      </IconButton>
    </div>
  );
}

export default GroupSearchBar;
