import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileOccupations() {
    const profileOccupations = useSelector((store) => store.profileOccupations);

    console.log(`What is profileOccupations`, profileOccupations.occupation);

    return (
        <>
            {profileOccupations.map((occupation, i) => {
                return <li key={i}>{occupation.occupation}</li>;
            })}
        </>
    );
}
