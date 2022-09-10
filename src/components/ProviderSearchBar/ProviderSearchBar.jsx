import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function ProviderSearchBar() {
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
        <Paper
            sx={{
                p: '0.5rem 0.5rem',
                display: 'flex',
                alignItems: 'center',
                width: 400,
            }}
        >
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
                <Divider sx={{ height: 30, m: 1 }} orientation="vertical" />
                <IconButton
                    type="click"
                    aria-label="refresh"
                    onClick={handleRefresh}
                >
                    <RefreshIcon style={{ fill: 'blue' }} />
                </IconButton>
            </form>
        </Paper>
    );
}
