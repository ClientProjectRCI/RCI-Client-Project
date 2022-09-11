const ProfileSpecializations = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROFILE_SPECIALIZATIONS':
            return action.payload;
        default:
            return state;
    }
};

export default ProfileSpecializations;
