import reviews from "../data/reviews.json"

const reviewsReducer = (state = reviews, action) => {

    switch (action.type) {

        // The dispatcher sends the action object to all reducers which we handle this particular type of event
        case 'delete-review':                             // handle new action type to delete a movie
            return state.filter(                        // calculate new state by
                                                        review => review._id !== action.review._id);  // filtering out the movie we deleted in the user interface

        default:
            return reviews
    }
}

export default reviewsReducer;