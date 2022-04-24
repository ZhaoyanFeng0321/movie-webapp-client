import profileData from "../data/profiles.json";

const profileReducer = (state= profileData, action) => {
    switch(action.type) {
        case 'save':
            return action.profile;
        default:
            return state;
    }
}

export default profileReducer;