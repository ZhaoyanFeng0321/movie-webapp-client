import React from "react";
import {useDispatch} from "react-redux";
import {deleteReview} from "../../actions/review-action";

const ReviewItem = ({review}) => {
    const dispatch = useDispatch();
    // const deleteReview = (review) => {
    //     dispatch({type: 'delete-review', review: review})
    // }
    return (
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">

                    <div className="col-2">
                        <img src={review["poster"]} alt="poster" width="70px"/>
                    </div>
                    <div className="col-9">
                        {review.to}
                        <br/>

                        <i className="far fa-star" style={{color:'#F5DE50'}}></i> {review.rating}/10
                        <br/>

                        <div style={{fontWeight: 'bold'}}>{review.title}</div>
                        <div style={{fontSize: 'small'}}>{review.postedOn}</div>
                        <br/>

                        {review.review}
                    </div>
                    <div className="col-1 ps-3">
                        {/*<i onClick={() =>                   // create new remove icon on top, right corner of*/}
                        {/*    deleteTuit(tweet)}              // each tuit. Bind click event with click handler*/}
                        {/*   className="fas fa-times-circle*/}
                        {/*fa-pull-right"></i>*/}
                        <i className="fas fa-times-circle float-end"
                           onClick={() => deleteReview(dispatch, review)}></i>



                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewItem;