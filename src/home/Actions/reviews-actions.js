import * as service from '../../services/reviews-service';

export const FIND_REVIEWS = 'FIND_REVIEWS';
export const findReviews = async (dispatch) => {
    const review = await service.findReviews();
    dispatch({
        type: FIND_REVIEWS,
        review
    });
}