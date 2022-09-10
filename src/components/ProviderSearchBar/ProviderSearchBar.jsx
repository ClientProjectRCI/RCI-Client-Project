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
import Swal from 'sweetalert2';

export default function ProviderSearchBar() {
    const dispatch = useDispatch();
    //state for the text box for the provider

    const [name, setName] = useState('');
    const [searchItem, setSearchItem] = useState('');

    function handleSearchSubmit(e) {
        if (name === '') {
            Swal.fire(
                `Looks like you didn't type anything`,
                `You can search by a provider's name`,
                'question'
            );
            handleRefresh();
        } else {
            dispatch({
                type: 'SEARCH_PROVIDER_NAME',
                payload: {
                    className: e.target.className,
                    searchItem: name,
                },
            });
        }
    }

    function handleRefresh() {
        dispatch({
            type: 'FETCH_PROVIDERS',
        });
    }

    return (
        <Paper
            sx={{
                p: '0.5rem 0.75rem',
                display: 'flex',
                alignItems: 'center',
                width: 'fit-content',
                height: 'fit-content',
            }}
        >
            <form className="name" onSubmit={handleSearchSubmit}>
                <TextField
                    sx={{ pr: 1.5 }}
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
                <IconButton
                    type="click"
                    onClick={handleSearchSubmit}
                    aria-label="search"
                >
                    <SearchIcon style={{ fill: 'blue', px: '1rem' }} />
                </IconButton>
            </form>
            <Divider sx={{ height: 30, m: 1 }} orientation="vertical" />
            <IconButton
                type="click"
                aria-label="refresh"
                onClick={handleRefresh}
            >
                <RefreshIcon style={{ fill: 'blue' }} />
            </IconButton>
        </Paper>
    );
}
