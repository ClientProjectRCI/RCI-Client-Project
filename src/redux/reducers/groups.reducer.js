const groupsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GROUPS':
      return action.payload;
    case 'CLEAR_GROUPS':
      return [];
    default:
      return state;
  }
};


export default groupsReducer;
