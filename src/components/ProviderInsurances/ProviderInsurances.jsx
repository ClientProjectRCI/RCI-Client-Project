import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//small component that will display the insurances related to the specific provider

function ProviderInsurances() {
  const insurances = useSelector((store) => store.providerInsurances);


  return (
    <div>
      {insurances.map((insurance, id) => {
        return <div key={id}> {insurance.insurance}</div>;
      })}
    </div>
  );
}

export default ProviderInsurances;
