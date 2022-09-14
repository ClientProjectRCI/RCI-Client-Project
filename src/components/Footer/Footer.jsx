import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Container } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

export default function Footer() {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '30vh',
            }}
            color="white"
        >
            <footer
                style={{
                    marginX: 2,
                    backgroundColor: 'var(--true-orange)',
                    position: 'absolute',
                    bottom: 0,
                    width: '100vw',
                }}
            >
                <Grid
                    container
                    sx={{
                        padding: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}
                >
                    {/* <Grid item style={{ margin: '0 2rem' }}>
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                            to="#"
                        >
                            Support
                        </Link>
                    </Grid> */}
                    {/* <Grid item style={{ margin: '0 2rem' }}>
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                            to="#"
                        >
                            Privacy Policy
                        </Link>
                    </Grid> */}
                    <Grid item style={{ margin: '0 2rem' }}>
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                            to="/contact"
                        >
                            Contact RCI
                        </Link>
                    </Grid>
                    <Grid
                        container
                        sx={{
                            marginY: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Grid item style={{ margin: '0 2rem' }}>
                            <Typography variant="p">
                                Copyright © 2022 Rochester Community Initiative.
                                All Rights Reserved.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        </Box>
    );
}
