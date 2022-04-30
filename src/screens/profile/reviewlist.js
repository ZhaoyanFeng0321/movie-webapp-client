import React, {useEffect, useState} from "react";
import ReviewItem from "./reviewlist-item";
import * as service from "../../services/review-service"
import * as authService from "../../services/auth-service";
import {useNavigate, useParams} from "react-router-dom";

const ReviewList = ({profile, cur}) => {

    //const {username} = useParams();

    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();

    const findReviewsByUser = async () =>
        await service.findAllReviewsByUser(profile.username)
            .then(reviews => setReviews(reviews));

    useEffect(async () => {
        try {
             await findReviewsByUser();
        }catch (e) {
        }

    },[])

    const deleteReview = async (rid) => {
        if(profile !== undefined){
            await service.deleteReview(rid)
            await findReviewsByUser();
        }else{
            alert("Please log in!");
            navigate('/login');
        }
    }

    // console.log(user)
    // console.log(reviews)

    return(
        <>

            <div className="row mt-5">
                <p className="wd-title wd-gold">Reviews</p>
            </div>


            {/*<h3 style={{marginTop:'10px', color:'#F5DE50'}}>Reviews</h3>*/}
            {profile.watchlist.length === 0 && profile.username === cur.username &&
                <h5>No reviews history.</h5>}
            {profile.watchlist.length === 0 && profile.username !== cur.username &&
                <h5>This user hasn't write a review.</h5>}
            {profile.watchlist.length !== 0 &&
            <ul className="list-group">
                {
                    reviews && reviews.map(review =>
                                               <ReviewItem key={review._id}
                                                           review={review}
                                               deleteReview={deleteReview}
                                               profile={profile}
                                               cur={cur}/>)
                }
            </ul>}
        </>
    )
}

export default ReviewList;