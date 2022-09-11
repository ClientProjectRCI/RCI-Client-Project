import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ProviderInsurances() {
    const providerInsurances = useSelector((store) => store.providerInsurances);

    console.log(`What is insurances.insurance`, providerInsurances.insurance);

    return (
        <div>
            {providerInsurances.map((insurance, id) => {
                return <li key={id}>{insurance.insurance}</li>;
            })}
            {/* <p>{providerInsurances.insurance}</p> */}
        </div>
    );
}
