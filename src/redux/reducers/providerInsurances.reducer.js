const providerInsurancesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROVIDER_INSURANCES':
      return action.payload;
    case 'CLEAR_PROVIDER_INSURANCES':
      return [];
    default:
      return state;
  }
};


export default providerInsurancesReducer;
