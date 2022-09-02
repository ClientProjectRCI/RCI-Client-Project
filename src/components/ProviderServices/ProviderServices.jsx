import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//small component that will display the services related to the specific provider

function ProviderServices() {
  const services = useSelector((store) => store.providerServices);

  return (
    <div>
      {services.map((service) => {
        return <div key={service.id}>{service.service}</div>;
      })}
    </div>
  );
}

export default ProviderServices;
