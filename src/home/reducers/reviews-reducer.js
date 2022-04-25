
const reviewReducer = (state = [], action) => {
    switch (action.type) {
        case 'FIND_ALL_REVIEWS':
            return action.reviews;
        default:
            return state;
    }
}
export default reviewReducer;
