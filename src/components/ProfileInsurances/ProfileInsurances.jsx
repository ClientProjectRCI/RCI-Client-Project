import React from 'react';
import { useSelector } from 'react-redux';
export default function ProfileInsurances() {
    const profileInsurances = useSelector((store) => store.profileInsurances);
    console.log(profileInsurances);
    return (
        <>
            {profileInsurances.map((insurance, i) => {
                return <p key={i}>{insurance.insurance}</p>;
            })}
        </>
    );
}
