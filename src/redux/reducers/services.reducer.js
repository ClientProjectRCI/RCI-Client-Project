const servicesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SERVICES':
        return action.payload;
      case 'CLEAR_SERVICES':
        return [];
      default:
        return state;
    }
  };
  
  
  export default servicesReducer;