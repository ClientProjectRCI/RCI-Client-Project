const specializationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SPECIALIZATIONS':
      return action.payload;
    case 'CLEAR_SPECIALIZATIONS':
      return [];
    default:
      return state;
  }
};


export default specializationsReducer;
