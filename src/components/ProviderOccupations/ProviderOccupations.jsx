import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//small component that will display the occupations related to the specific provider

function ProviderOccupations() {
  const occupations = useSelector((store) => store.providerOccupations);

  return (
    <div>
      {occupations.map((occupation) => {
        return <div key={occupation.id}>{occupation.occupation}</div>;
      })}
    </div>
  );
}

export default ProviderOccupations;
