import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import service from "../../services/review-service";
import axios from "axios";

const ReviewItem = ({review, deleteReview}) => {
    // const dispatch = useDispatch();
    // const deleteReview = (review) => {
    //     dispatch({type: 'delete-review', review: review})
    // }


    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979&i='+ review.to;
    const search = async () => { const response = await axios.get(`${searchUrl}`)
        setMovies(response.data) }
    useEffect(() => { search() }, [])

    return (
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">

                    <div className="col-2">
                        <img src={movies.Poster} alt="poster" width="120px"/>
                    </div>
                    <div className="col-9">
                        {movies.Title}
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
                           onClick={() => deleteReview(review._id)}></i>



                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewItem;