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
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: 1,
                width: '100vw',
            }}
        >
            <Card onClick={() => handleClick(provider.id)} sx={{ marginY: 1 }}>
                <CardActionArea>
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
                        <Typography gutterBottom variant="h5" component="h3">
                            {provider.name}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                            {provider.bio}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>{provider.phone}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}
