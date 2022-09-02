const providerOccupationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROVIDER_OCCUPATIONS':
      return action.payload;
    case 'CLEAR_PROVIDER_OCCUPATIONS':
      return [];
    default:
      return state;
  }
};


export default providerOccupationsReducer;
