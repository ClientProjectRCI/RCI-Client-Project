import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//small component that will display the specializations related to the specific provider

function ProviderSpecializations() {
  const specializations = useSelector((store) => store.providerSpecializations);


  return (
    <div>
      {specializations.map((specialization) => {
        return (
          <div key={specialization.id}>
            {specialization.specialization}
          </div>
        );
      })}
    </div>
  );
}

export default ProviderSpecializations;
