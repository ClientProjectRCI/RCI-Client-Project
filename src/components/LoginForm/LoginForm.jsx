import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    Grid,
    TextField,
    Typography,
} from '@mui/material';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();
    const history = useHistory();

    const login = (event) => {
        event.preventDefault();
        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
            dispatch({ type: 'FETCH_PROVIDER_PROFILE', payload: user.id });
        } else {
            dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
    }; // end login

    return (
        <FormControl
            style={{
                width: '25rem',
                paddingBottom: '2rem',
                height: 'fit-content',
                display: 'flex',
                alignSelf: 'flex-end',
                borderRadius: 10,
                marginTop: '3rem',
            }}
            onSubmit={login}
        >
            <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', color: 'var(--cornflower)' }}
            >
                Login
            </Typography>
            <Grid item margin={3}>
                {errors.registrationMessage && (
                    <Typography variant="h6" className="alert" role="alert">
                        {errors.registrationMessage}
                    </Typography>
                )}
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        fullWidth
                        required
                        variant="outlined"
                        label="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        fullWidth
                        required
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                margin={1}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 'auto',
                }}
            >
                <Button
                    sx={{ margin: 5 }}
                    color="success"
                    size="large"
                    variant="contained"
                    onClick={login}
                >
                    Login
                </Button>
            </Grid>
            <Link to="/registration">Need an account? Signup</Link>
        </FormControl>
    );
}
