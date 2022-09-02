const insurancesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_INSURANCES':
      return action.payload;
    case 'CLEAR_INSURANCES':
      return [];
    default:
      return state;
  }
};


export default insurancesReducer;
