import React from "react";
//import profile from '../data/profile.json';

const profileReducer = (state = [], action) => {
    switch (action.type) {
        case 'update-profile':
            return { ...profile, ...action.profile };
        default:
            return profile;
    }
};

export default profileReducer;