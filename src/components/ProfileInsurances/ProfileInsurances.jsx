import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//small component that will display the insurances related to the specific provider

function ProfileInsurances() {
  const profileInsurances = useSelector((store) => store.profileInsurances);

  // console.log(`What is insurances`,insurances);
  console.log(`What is insurances.insurance`, profileInsurances);
  // console.log(`What is insurance.insurance`, insurance.insurance);


  return (
    <div>
        {/* will come back to figure .mpa out later. TRUST ME, we tried soooo many ways. */}
      {/* {profileInsurances.map((insurance) => {
        return <p>{insurance}</p>;
      })} */}
      <p>{profileInsurances[0]?.insurance}</p>
      <p>{profileInsurances[1]?.insurance}</p>
      <p>{profileInsurances[2]?.insurance}</p>
      <p>{profileInsurances[3]?.insurance}</p>
      <p>{profileInsurances[4]?.insurance}</p>
      <p>{profileInsurances[5]?.insurance}</p>
      <p>{profileInsurances[6]?.insurance}</p>
      <p>{profileInsurances[7]?.insurance}</p>
      <p>{profileInsurances[8]?.insurance}</p>
      <p>{profileInsurances[9]?.insurance}</p>
      <p>{profileInsurances[10]?.insurance}</p>
      <p>{profileInsurances[11]?.insurance}</p>
    </div>
  );
}

export default ProfileInsurances;
