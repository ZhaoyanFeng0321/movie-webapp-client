import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ReviewItem = ({review, deleteReview, profile, cur}) => {

    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979&i='+ review.to;
    const search = async () => { const response = await axios.get(`${searchUrl}`)
        setMovies(response.data) }
    useEffect(() => { search() }, [])

    return (
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">

                    <div className="col-2 col-sm-0 col-md-2 d-none d-xl-block">
                        <img src={movies.Poster} alt="poster" width="120px"/>
                    </div>
                    <div className="col-10 col-sm-12 col-md-10">
                        {
                            cur && profile.username === cur.username &&
                            <i className="fas fa-times-circle float-end fa-2x"
                            style={{color:'#F5DE50'}}
                            onClick={() => deleteReview(review._id)}> </i>
                        }
                        {
                            cur && cur.accountType === "ADMIN" &&
                            <i className="fas fa-times-circle float-end fa-2x"
                               style={{color:'#F5DE50'}}
                               onClick={() => deleteReview(review._id)}> </i>

                        }

                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>
                            <Link to={`/details/${movies.imdbID}`}>
                                {movies.Title}
                            </Link>
                        </div>
                        <i className="fas fa-star" style={{color:'#F5DE50'}}> </i> {review.rating}/10
                        <br/>
                        <div style={{fontSize: 'small', color: 'lightgray', marginBottom: '5px'}}>Posted On: {review.postedOn.substring(
                            0, 10)}</div>

                        <div style={{fontStyle: 'italic'}}>"{review.review}"</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ReviewItem;