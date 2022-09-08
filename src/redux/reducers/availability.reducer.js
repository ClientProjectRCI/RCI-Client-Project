const availabilityReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_AVAILABILITY':
        return action.payload;
      case 'CLEAR_AVAILABILITY':
        return [];
      default:
        return state;
    }
  };
  
  
  export default availabilityReducer;