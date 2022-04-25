// import reviews from "../data/reviews.json"

import {CREATE_REVIEW, DELETE_REVIEW, FIND_ALL_REVIEWS,UPDATE_REVIEW, FIND_ALL_REVIEWS_BY_USER} from "../actions/reviews-actions";

const reviewsReducer = (state = [], action) => {

    switch (action.type) {

        case FIND_ALL_REVIEWS:
            return action.reviews;
        // The dispatcher sends the action object to all reducers which we handle this particular type of event
        case DELETE_REVIEW:                             // handle new action type to delete a movie
            return state.filter(                        // calculate new state by
                                                        review => review._id !== action.review._id);  // filtering out the movie we deleted in the user interface
        case CREATE_REVIEW:
            console.log(action.newReview)
            return [
                action.newReview,
                ...state,
            ];
        case UPDATE_REVIEW:
            return state.map(
                review => review._id === action.review._id ?
                        action.review : review);
        case FIND_ALL_REVIEWS_BY_USER:
            return action.reviews;
        default:
            return state;
    }
}

export default reviewsReducer;