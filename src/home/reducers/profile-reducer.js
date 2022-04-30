import {
    CREATE_USER,
    FIND_USER,
    UPDATE_USER
}
    from "../Actions/profile-actions";

const profileReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_USER:
            return [action.user, ...state];
        case  FIND_USER:
            return action.user;
        case UPDATE_USER:
            return state.map(user => user._id === action.user._id ? action.user : user);
        default:
            return state;
    }
}

export default profileReducer;