import React , {useEffect}from "react";
import ReviewItem from "./ReviewItem";
import {useSelector,useDispatch} from "react-redux";
import * as service from "../../services/reviews-service";

const ReviewList = () => {
    const reviews = useSelector(state => state.reviews);

    function comp(a,b) {

        return new Date(b.postedOn).getTime()-new Date(a.postedOn).getTime();
    }
     reviews.sort(comp);
    var latest = reviews.slice(0,3);


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

    return (
        <>
            <p className="wd-title wd-gold">Latest Reviews</p>
            <ul className="list-group">
                {latest.map(review => {return(<ReviewItem item={review}/>
            );
            })}
        </ul>
            </>
        );
}
export default ReviewList;