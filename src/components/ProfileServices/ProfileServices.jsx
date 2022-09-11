import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileServices() {
    const profileServices = useSelector((store) => store.profileServices);

    return (
        <>
            {profileServices.map((service, i) => {
                return <li key={i}>{service.service}</li>;
            })}
        </>
    );
}
