import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ProviderOccupations() {
    const providerOccupations = useSelector(
        (store) => store.providerOccupations
    );

    console.log(`Occupations:`, providerOccupations);

    return (
        <div>
            {providerOccupations.map((job) => {
                return <li key={job.id}>{job.occupation}</li>;
            })}
        </div>
    );
}
