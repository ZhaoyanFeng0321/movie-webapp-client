import React, {useEffect, useState} from "react";
import ReviewItem from "./reviewlist-item";
import * as service from "../../services/review-service"
import * as authService from "../../services/auth-service";
import {useNavigate, useParams} from "react-router-dom";

const ReviewList = () => {

    const {username} = useParams();

    const [profile, setProfile] = useState(undefined);
    const [user, setUser] = useState(undefined);

    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();

    const findReviewsByUser = async (us) =>
        await service.findAllReviewsByUser(us._id)
            .then(reviews => setReviews(reviews));

    useEffect(async () => {
        try {
            const u = await authService.findUser(username);
            setUser(u);
            findReviewsByUser(u);

            const up = await authService.profile();
            if (up) {
                setProfile(up);
            }
        }catch (e) {
        }

    },[])

    const deleteReview = async (rid) => {
        if(profile !== undefined){
            await service.deleteReview(rid)
                .then(findReviewsByUser(user));
        }else{
            alert("Please log in!");
            navigate('/login');
        }
    }

    // console.log(user)
    // console.log(reviews)

    return(
        <>
            <h3 style={{color:'#F5DE50'}}>Your Reviews</h3>
            <ul className="list-group">
                {
                    reviews && reviews.map(review =>
                                               <ReviewItem key={review._id}
                                                           review={review}
                                               deleteReview={deleteReview}/>)
                }
            </ul>
        </>
    )
}

export default ReviewList;