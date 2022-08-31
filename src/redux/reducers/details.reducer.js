const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
