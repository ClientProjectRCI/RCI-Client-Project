import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@material-ui/core';
import rcilogo from '../../assets/rcilogo.png';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const user = useSelector((store) => store.user);

    return (
        <Grid container>
            <Link to="/home">
                <img src={rcilogo} style={{ width: 340, height: 120 }} />
            </Link>
            <Grid item>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/providers">Providers</Link>
                <Box>
                    {/* If no user is logged in, show these links */}
                    {!user.id && (
                        // If there's no user, show login/registration links
                        <Link to="/login">Login</Link>
                    )}

                    {/* If a user is logged in, show these links */}
                    {user.access_level === 1 && <Link to="/admin">Admin</Link>}
                    {user.access_level === 2 && (
                        <Link to="/provider">Provider</Link>
                    )}
                    {user.access_level === 3 && <Link to="/group">Group</Link>}
                    <LogOutButton />
                </Box>
            </Grid>
        </Grid>
    );
}
