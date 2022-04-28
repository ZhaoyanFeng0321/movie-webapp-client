import React , {useEffect}from "react";
import ReviewItem from "./ReviewItemAdmin";
import {useSelector,useDispatch} from "react-redux";
import * as service from "../../services/review-service";

const ReviewList = () => {
    const reviews = useSelector(state => state.reviews);

    function comp(a,b) {

        return new Date(b.postedOn).getTime()-new Date(a.postedOn).getTime();
    }
    reviews.sort(comp);
    // var latest = reviews.slice(0,4);


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


    const deleteReview = async (rid) => {
        await service.deleteReview(rid);
    }


    return (
        <>
            <p className="wd-title wd-gold">All Reviews posted by users</p>
            <ul className="list-group">
                {reviews.map(review => {return(<ReviewItem item={review} deleteReview={deleteReview}/>
                );
                })}
            </ul>
        </>
    );
}
export default ReviewList;