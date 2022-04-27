import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import service from "../../services/review-service";
import axios from "axios";
import {Link} from "react-router-dom";

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

                    <div className="col-2 col-sm-0 col-md-2 d-sm-none d-md-block">
                        <img src={movies.Poster} alt="poster" width="120px"/>
                    </div>
                    <div className="col-10 col-sm-12 col-md-10">
                        <i className="fas fa-times-circle float-end"
                           style={{color:'#F5DE50'}}
                           onClick={() => deleteReview(review._id)}> </i>

                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>
                            <Link to={`/details/${movies.imdbID}`}>
                                {movies.Title}
                            </Link>
                        </div>
                        <i className="fas fa-star" style={{color:'#F5DE50'}}></i> {review.rating}/10
                        <br/>
                        <div style={{fontSize: 'small', color: 'lightgray', marginBottom: '5px'}}>Posted On: {review.postedOn}</div>

                        <div style={{fontStyle: 'italic'}}>"{review.review}"</div>
                    </div>
                    {/*<div className="col-1 float-end">*/}
                    {/*    /!*<i onClick={() =>                   // create new remove icon on top, right corner of*!/*/}
                    {/*    /!*    deleteTuit(tweet)}              // each tuit. Bind click event with click handler*!/*/}
                    {/*    /!*   className="fas fa-times-circle*!/*/}
                    {/*    /!*fa-pull-right"></i>*!/*/}
                    {/*    <i className="fas fa-times-circle"*/}
                    {/*       onClick={() => deleteReview(review._id)}></i>*/}

                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}

export default ReviewItem;