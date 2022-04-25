import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import ReviewItem from "./review-item";
import {findAllReviews} from "../actions/reviews-actions";

const ReviewList = () => {
    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => findAllReviews(dispatch), [dispatch]);
    return(
        <>
            <h3 style={{color:'#F5DE50'}}>Your Reviews</h3>
            <ul className="list-group">
                {
                    reviews && reviews.map(review =>
                                             <ReviewItem key={review._id}
                                                            review={review}/>)
                }
            </ul>
        </>
    )
}

export default ReviewList;