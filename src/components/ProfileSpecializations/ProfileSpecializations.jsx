import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileSpecializations() {
    const profileSpecializations = useSelector(
        (store) => store.profileSpecializations
    );

    return (
        <>
            {profileSpecializations.map((specialization, i) => {
                return <li key={i}>{specialization.specialization}</li>;
            })}
        </>
    );
}
