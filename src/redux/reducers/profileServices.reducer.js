const profileServices = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROFILE_SERVICES':
            return action.payload;
        default:
            return state;
    }
};

export default profileServices;
