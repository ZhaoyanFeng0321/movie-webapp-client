// import profileData from "../data/profiles.json";

const profileReducer = (state= [], action) => {
    switch(action.type) {
        case 'save':
            return action.profile;
        default:
            return state;
    }
}

export default profileReducer;