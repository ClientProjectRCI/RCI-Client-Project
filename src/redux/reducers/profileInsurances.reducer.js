const profileInsurances = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROFILE_INSURANCES':
            return action.payload;
        default:
            return state;
    }
};

export default profileInsurances;
