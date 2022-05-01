import React, {useEffect, useState} from "react";
import * as service from "../../services/auth-service";
import * as reviewService from "../../services/review-service";
import ReactStars from 'react-stars';


const PostReview = ({mid, findReviewsByOMDB}) => {

    const [newReview, setNewReview] = useState({review:''});
    const [profile, setProfile] = useState({});
    // const dispatch = useDispatch();
    const [value, setValue] = useState(0);

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

    const ratingChanged = (newRating) => {
        setValue(newRating);
        setNewReview({...newReview,
                         rating: newRating})
    }

    return ( <>
        <h2>Post your review</h2>

        <div className="d-flex">

            <textarea className="form-control form-group w-100 h-100" placeholder="write a review!"
                      onChange={(event) => setNewReview({...newReview,
                                                           review: event.target.value})}>
            </textarea>

        </div><span>Rating: </span>
        <ReactStars
            count={10}
            value={value}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />

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