import React, { useState } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Button,
    Tooltip,
    FormControl,
    Grid,
    TextField,
    Typography,
    FormLabel,
} from '@mui/material';
import { width } from '@mui/system';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();
    const history = useHistory();

    const registerGroup = (event) => {
        event.preventDefault();
        // register group
        dispatch({
            type: 'REGISTER',
            payload: {
                username: username,
                password: password,
                access_level: 3, // hardcode access_level 3 for group
            },
        });
        // navigate to group  profile
        // history.push('/register-group');
    }; // end registerUser

    const registerProvider = (event) => {
        event.preventDefault();
        // register provider
        dispatch({
            type: 'REGISTER',
            payload: {
                username: username,
                password: password,
                access_level: 2, // hardcode access_level 2 for provider
            },
        });
        //navigate to provider profile
        // history.push('/register-provider');
    }; // end provider register

    return (
        <Box mt={5}>
            <FormControl
                style={{
                    width: '25rem',
                    paddingBottom: '2rem',
                    height: 'fit-content',
                    display: 'flex',
                    alignSelf: 'flex-end',
                    borderRadius: 10,
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Create Account
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
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                            fullWidth
                            required
                            variant="outlined"
                            label="Password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </Grid>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={2}
                        margin={1}
                    >
                        <Grid item>
                            <Button
                                sx={{
                                    width: 'fit-content',
                                    backgroundColor: 'var(--true-orange)',
                                }}
                                size="large"
                                variant="contained"
                                value="Provider"
                                onClick={registerProvider}
                            >
                                Individual
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                sx={{
                                    width: 'fit-content',
                                    backgroundColor: 'var(--cyan)',
                                }}
                                size="large"
                                variant="contained"
                                value="Provider"
                                onClick={registerGroup}
                            >
                                Group
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </FormControl>
        </Box>
    );
}
