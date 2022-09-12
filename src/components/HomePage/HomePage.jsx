import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

export default function HomePage() {
    return (
        <Grid
            container
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '1rem',
            }}
            spacing={10}
        >
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Typography
                    align="left"
                    variant="h2"
                    style={{
                        color: 'var(--true-orange)',
                        fontWeight: 900,
                    }} //color could potentially be put into theme
                >
                    Organize,
                </Typography>
                <Typography
                    align="left"
                    variant="h2"
                    style={{ color: 'var(--cornflower)', fontWeight: 900 }}
                >
                    Educate,
                </Typography>
                <Typography
                    align="left"
                    variant="h2"
                    style={{
                        color: 'var(--cyan)',
                        fontWeight: 900,
                    }}
                >
                    Advocate.
                </Typography>
                <img src="https://static.wixstatic.com/media/3d076e_1d0bc52d5465483083114991d592ebd8~mv2.jpg/v1/fill/w_631,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Proof13.jpg" />
                <Typography style={{ fontFamily: 'Arial' }}>
                    Improving our community through avenues of social justice,
                    providing a platform for youth empowerment and their
                    education, and serving underprivileged demographics.
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                style={{ color: 'black' }}
            >
                <Typography
                    align="center"
                    variant="h3"
                    style={{
                        fontWeight: 900,
                        color: 'maroon',
                    }}
                >
                    Crisis Hotline
                </Typography>
                <Typography align="center" variant="h5">
                    1-844-CRISIS2 or text HOME to 741741.
                </Typography>
                <br />
                <Typography align="center" variant="h5">
                    Are you or someone you know in mental distress?
                </Typography>
                <Box sx={{ height: 200, width: 200, mx: 'auto' }}>
                    <img src="https://content.govdelivery.com/attachments/fancy_images/MNOLMSTED/2020/02/3179511/2-10-20-olmsted-logo_original.png" />
                </Box>
                <Typography variant="h6" align="center">
                    <q style={{ color: 'green' }}>
                        <i>
                            Services are no cost, confidential and immediately
                            accessible.
                        </i>
                    </q>
                    <br />
                    <br />
                    For more information, click{' '}
                    <a
                        href="https://www.crisisresponsesoutheastmn.com/"
                        target="_blank" //this opens link in NEW tab
                    >
                        here
                    </a>
                </Typography>
            </Grid>
        </Grid>
    );
}
