import React from 'react';
import { useSelector } from 'react-redux';
export default function ProfileInsurances() {
    const profileInsurances = useSelector((store) => store.profileInsurances);
    return (
        <>
            {profileInsurances.map((insurance, i) => {
                return <li key={i}>{insurance.insurance}</li>;
            })}
        </>
    );
}
