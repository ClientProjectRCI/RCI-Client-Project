import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function LogOutButton(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT' });
        history.push(`/`);
    };

    return (
        <Button
            style={{ textDecoration: 'none', color: 'inherit' }}
            className={props.className}
            onClick={handleLogOut}
        >
            Log Out
        </Button>
    );
}
