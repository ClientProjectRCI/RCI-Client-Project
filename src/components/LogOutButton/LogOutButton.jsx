import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function LogOutButton(props) {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT' });
    };
    return (
        <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            // This button shows up in multiple locations and is styled differently
            // because it's styled differently depending on where it is used, the className
            // is passed to it from it's parents through React props
            className={props.className}
            onClick={handleLogOut}
            to="/"
        >
            Log Out
        </Link>
    );
}

export default LogOutButton;
