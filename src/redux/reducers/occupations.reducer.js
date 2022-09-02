const occupationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OCCUPATIONS':
      return action.payload;
    case 'CLEAR_OCCUPATIONS':
      return [];
    default:
      return state;
  }
};


export default occupationsReducer;
