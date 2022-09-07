const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEND_SEARCH_RESULT':
      console.log('SEARCH Results (Reducer)', state);
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
