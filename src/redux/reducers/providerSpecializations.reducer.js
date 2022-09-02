const providerSpecializationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROVIDER_SPECIALIZATIONS':
      return action.payload;
    case 'CLEAR_PROVIDER_SPECIALIZATIONS':
      return [];
    default:
      return state;
  }
};


export default providerSpecializationsReducer;
