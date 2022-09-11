const profileOccupations = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROFILE_OCCUPATIONS':
            return action.payload;
        default:
            return state;
    }
};

export default profileOccupations;
