import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { Typography, Box } from '@material-ui/core';

export default function RegisterPage() {
    return (
        <center>
            <RegisterForm />
            <Link to="/login">Already have an account? Login</Link>
            <Box sx={{ color: 'gray', mt: 20 }}>
                <Typography variant="p">
                    Copyright © 2022 Rochester Community Initiative.
                </Typography>
                <br></br>
                <Typography variant="p">All Rights Reserved</Typography>
            </Box>
        </center>
    );
}
