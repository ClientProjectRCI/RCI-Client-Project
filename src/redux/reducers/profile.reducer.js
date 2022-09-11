const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_PROFILE':
      return action.payload;
      case 'UPDATE_PROFILE':
        // spread state and action.payload to bring over everything
        return { ...state, ...action.payload };
    default:
        return state;
  }
};

export default profileReducer;
