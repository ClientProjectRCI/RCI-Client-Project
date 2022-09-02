const providerServicesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROVIDER_SERVICES':
      return action.payload;
    case 'CLEAR_PROVIDER_SERVICES':
      return [];
    default:
      return state;
  }
};


export default providerServicesReducer;
