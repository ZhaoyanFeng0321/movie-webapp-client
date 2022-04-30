import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {createReview} from "../../actions/review-action";
// import axios from "axios";
import * as service from "../../services/auth-service";
import * as reviewService from "../../services/review-service";
// import StarRating from 'react-star-rating';
//<link rel="stylesheet" href="node_modules/react-star-rating/dist/css/react-star-rating.min.css">


const PostReview = ({mid, findReviewsByOMDB}) => {

    const [newReview, setNewReview] = useState({review:''});
    const [profile, setProfile] = useState({});
    // const dispatch = useDispatch();

    const postHandler = (uid, newReview) => {
        const review = {
            ...newReview,
            stats: {
                replies:0,
                repost:0,
                likes:0,
                dislikes:0
            }
        }
        reviewService.createReview(uid, mid, review).then(findReviewsByOMDB);
        console.log(newReview)
    };

    useEffect(async () => {
        let profile = await service.profile();
        setProfile(profile);

    }, []);



    return ( <>
        <div className="d-flex">

            <textarea className="form-control form-group w-100 h-100"
                      onChange={(event) => setNewReview({...newReview,
                                                           review: event.target.value})}>
            </textarea>
            {/*<textarea className="form-control form-group w-50 h-100"*/}
            {/*          onChange={(event) => setNewReview({...newReview,*/}
            {/*                                                rating: event.target.value})}>*/}
            {/*</textarea>*/}
        </div>

        <div className="d-flex">

            <div className="wd-tweet mt-2 mb-3">
                <button onClick={()=>postHandler(profile.username, newReview)}
                        className="btn mb-3 form-control">Post
                </button>
            </div>
        </div>



    </> );
}
export default PostReview;