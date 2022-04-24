import {useSelector} from "react-redux";
import React from "react";
import ReviewItem from "./review-item";

const ReviewList = () => {
    const reviews = useSelector(state => state.reviews);
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