import React, {useEffect, useState} from "react";
import ReviewItem from "./reviewlist-item";
import * as service from "../../services/review-service"
import * as authService from "../../services/auth-service";
import {useNavigate, useParams} from "react-router-dom";

const ReviewList = ({profile, cur}) => {



    // const [profile, setProfile] = useState(undefined);
    //const [user, setUser] = useState(undefined);

    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();

    const findReviewsByUser = (us) =>
        service.findAllReviewsByUser(us.username)
            .then(reviews => setReviews(reviews));

    useEffect(async () => {
        try {
            // const u = await authService.findUser(username);
            // setUser(u);
             findReviewsByUser(profile);


            // const up = await authService.profile();
            // if (up) {
            //     setProfile(up);
            // }
        }catch (e) {
        }

    },[])

    const deleteReview = async (rid) => {
        if(profile !== undefined){
            await service.deleteReview(rid)
            await findReviewsByUser(profile);
        }else{
            alert("Please log in!");
            navigate('/login');
        }
    }

    // console.log(user)
    // console.log(reviews)

    return(
        <>
            <h3 style={{marginTop:'10px', color:'#F5DE50'}}>Reviews</h3>
            <ul className="list-group">
                {
                    reviews && reviews.map(review =>
                                               <ReviewItem key={review._id}
                                                           review={review}
                                               deleteReview={deleteReview}
                                               profile={profile}
                                               cur={cur}/>)
                }
            </ul>
        </>
    )
}

export default ReviewList;