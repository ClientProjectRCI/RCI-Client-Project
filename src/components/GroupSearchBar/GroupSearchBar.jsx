import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Divider from '@mui/material/Divider';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

export default function GroupSearchBar() {
    const dispatch = useDispatch();
    //state for the text box for the group
    const [name, setName] = useState('');

    const [searchItem, setSearchItem] = useState('');
    //search by group name function
    function handleGroupSearchSubmit(e) {
        if (name === '') {
            Swal.fire(
                `Looks like you didn't type anything`,
                `You can search by a group's name`,
                'question'
            );
            handleRefresh();
        } else {
            dispatch({
                type: 'SEARCH_GROUP_NAME',
                payload: {
                    className: e.target.className,
                    searchItem: name,
                },
            });
        }
    }

    function handleRefresh() {
        dispatch({
            type: 'FETCH_GROUPS',
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
            {/* text field for the provider */}
            <form className="name" onSubmit={handleGroupSearchSubmit}>
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
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: 'blue', px: '1rem' }} />{' '}
                </IconButton>
                {/* refresh icon to get all groups again */}
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
