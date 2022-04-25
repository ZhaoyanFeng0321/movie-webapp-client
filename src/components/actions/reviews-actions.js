import * as service from '../services/reviews-service';

export const CREATE_REVIEW = 'CREATE_REVIEW';
export const FIND_ALL_REVIEWS = 'FIND_ALL_REVIEWS';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const FIND_ALL_REVIEWS_BY_USER = 'FIND_ALL_REVIEWS_BY_USER';


export const createReview = async (dispatch, review) => {
    const newReview = await service.createReview(review);
    dispatch({
                 type: CREATE_REVIEW,
                 newReview
             });
}

export const findAllReviews = async (dispatch) => {
    const reviews = await service.findAllReviews();
    dispatch({
                 type: FIND_ALL_REVIEWS,
                 reviews
             });
}


export const updateReview = async (dispatch, review) => {
    const status = await service.updateReview(review);
    if (status.acknowledged === true) {
        dispatch({
                     type: UPDATE_REVIEW,
                     review
                 });
    }
}

export const deleteReview = async (dispatch, review) => {
    const response = await service.deleteReview(review);
    if (response.acknowledged === true) {
        dispatch({
                     type: DELETE_REVIEW,
                     review
                 })
    }

}

export const findAllReviewsByUser = async (dispatch, uid) => {
    const reviews = await service.findAllReviewsByUser(uid);
    dispatch({
                 type: FIND_ALL_REVIEWS_BY_USER,
                 reviews
             });
}