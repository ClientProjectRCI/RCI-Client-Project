import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//small component that will display the insurances related to the specific provider

function ProviderInsurances() {
  const providerInsurances = useSelector((store) => store.providerInsurances);

  // console.log(`What is insurances`,insurances);
  console.log(`What is insurances.insurance`,providerInsurances.insurance);
  // console.log(`What is insurance.insurance`, insurance.insurance);


  return (
    <div>
      {providerInsurances.map((insurance, id) => {
        return <p key={id}>{insurance.insurance}</p>;
      })}
      {/* <p>{providerInsurances.insurance}</p> */}
    </div>
  );
}

export default ProviderInsurances;
