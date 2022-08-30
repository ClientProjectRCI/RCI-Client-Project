const providersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROVIDERS':
      return action.payload;
    case 'CLEAR_PROVIDERS':
      return [];
    default:
      return state;
  }
};


export default providersReducer;
