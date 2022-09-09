const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_PROFILE':
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;
