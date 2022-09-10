import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Typography,
    CardContent,
    Card,
    CardMedia,
    CardActionArea,
    Paper,
} from '@mui/material';

export default function ProvidersListItem({ provider }) {
    const history = useHistory();
    const dispatch = useDispatch();
    //
    const handleClick = (id) => {
        console.log('You clicked this Provider!', id);
        dispatch({ type: 'FETCH_PROVIDER_DETAILS', payload: id });
        dispatch({ type: 'FETCH_PROVIDER_SPECIALIZATIONS', payload: id });
        dispatch({ type: 'FETCH_PROVIDER_OCCUPATIONS', payload: id });
        dispatch({ type: 'FETCH_PROVIDER_INSURANCES', payload: id });
        dispatch({ type: 'FETCH_PROVIDER_SERVICES', payload: id });
        history.push(`/provider-details`);
    };

    return (
        // CONTAINER FOR POSITIONING
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 1,
                width: '100vw',
            }}
        >
            {/* CARD CSS */}
            <Card
                onClick={() => handleClick(provider.id)}
                sx={{
                    backgroundColor: 'var(--content)',
                    width: '70vw',
                    marginY: 1,
                    '&:hover': {
                        boxShadow: '0.5rem 0.5rem 1rem 0.5rem gray',
                        cursor: 'pointer',
                    },
                }}
            >
                {/* CARD CONTENTS */}
                <CardContent>
                    <CardMedia
                        component="img"
                        image={provider.picture}
                        sx={{
                            height: 200,
                            width: 'auto',
                            borderRadius: 5,
                        }}
                    />
                </CardContent>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ width: 'fit-content' }}
                    >
                        {provider.name}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        {provider.bio}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography>{provider.phone}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
