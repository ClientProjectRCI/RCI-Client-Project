import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
    const history = useHistory();

    return (
        <center>
            <RegisterForm />
            <button
                type="button"
                className="btn btn_asLink"
                onClick={() => {
                    history.push('/login');
                }}
            >
                Login
            </button>
        </center>
    );
}

export default RegisterPage;
