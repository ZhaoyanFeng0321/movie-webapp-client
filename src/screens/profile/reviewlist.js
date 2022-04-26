import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import ReviewItem from "./reviewlist-item";
import {findAllReviewsByUser} from "../../actions/review-action";

import * as service from "../../services/review-service"
import * as authService from "../../services/auth-service";
import {useParams} from "react-router-dom";

const ReviewList = (effect, deps) => {
    // const user = useSelector(state => state.user);
    // const reviews = useSelector(state => state.reviews);
    //
    // const dispatch = useDispatch();
    //
    // const {username} = useParams();
    // // const [user, setUser] = useState([]);
    // // const findUser = async () =>
    // //     await authService.findUser(username)
    // //         .then(user => setUser(user));
    //
    //
    // // const [reviews, setReviews] = useState([]);
    //
    // // const findReviewsByUser = async () =>
    // //     await service.findAllReviewsByUser(user._id)
    // //         .then(reviews => setReviews(reviews));
    //
    // useEffect(() => {
    //     async function findUser(){
    //         const user = await authService.findUser(username);
    //         dispatch({
    //             type: "FIND_USER",
    //             user: user
    //         });
    //     }
    //     async function findAllReviewsByUser(){
    //         const reviews = await service.findAllReviewsByUser(user._id);
    //         dispatch({
    //                      type: 'FIND_ALL_REVIEWS_BY_USER',
    //                      reviews: reviews
    //                  });
    //     }
    //     findUser();
    //     findAllReviewsByUser();
    // },);

    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();

    useEffect(() => {
        async function findAllReviews(){
            const reviews = await service.findAllReviews();
            dispatch({
                         type: 'FIND_ALL_REVIEWS',
                         reviews: reviews
                     });
        }
        findAllReviews();
    },);


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