import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import "../log.css";
import {Link} from "react-router-dom";
//import Preformatted from "../../../movie-detail/src/components/preformatted";
// import SecureContent from "../components/secure-content";
import Navigation from "../../home/Navigation/Navigation";
import * as authService from "../../services/auth-service";
import NavigationPersonal from "../../home/Navigation/NavigationPersonal";
import * as service from "../../services/review-service";
import ReviewItem from "./reviewItem";

const OmdbDetails = () => {
    const [movieDetails, setMovieDetails] = useState([])
    const url = 'https://www.omdbapi.com/?apikey=b2bd5979'
    const {imdbID} = useParams()

    const [login, setLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState("");

    const searchMovieByImdbID = async (imdbID) => {
        const response = await axios.get(`${url}&i=${imdbID}`)
        setMovieDetails(response.data)
    }
    useEffect(async () => {
        await searchMovieByImdbID(imdbID);
        try {
            let user = await authService.profile();
            await setCurrentUser(user);
            setLogin(true);
        } catch (e) {

        }

    }, [])



    const [reviews, setReviews] = useState([]);
    const findReviewsByOMDB = async () =>
        await service.findAllReviewByOMDB(imdbID)
            .then(reviews => setReviews(reviews));

    useEffect(async () => {
        try {
            await findReviewsByOMDB();
        }catch (e) {
        }

    }, [])

    const addMovieToList = async (name, movieID) => {
        await authService.addMovieToList(name, movieID).catch(e => alert(e));
    }

    return (
        <div className="text-warning">

            <div>
                <div className="row ms-5 me-5">

                    <h1 className="fw-bold wd-gold">{movieDetails.Title}</h1>
                </div>


                <div className="row ms-5 me-5">
                    <div className="col-3">
                        <img src={movieDetails.Poster} height={300} alt=""/>
                        <p className="mt-3"><i
                            className="fa-solid fa-star-sharp"></i> {movieDetails.imdbRating}</p>
                        {/*<button className="btn btn-warning"><i className="fa-solid fa-thumbs-up"></i> </button>*/}
                        <button onClick={() => addMovieToList(currentUser.username, imdbID)}
                                className="btn btn-block btn-warning"><i
                            className="fa-solid fa-plus"></i> Add to Watch
                        </button>
                    </div>


                    <div className="col-9 d-none d-md-block">
                        <p>{movieDetails.Plot}</p>
                        <p> Year Released: {movieDetails.Year}</p>
                        <p> Rated: {movieDetails.Rated}</p>
                        <p> Runtime : {movieDetails.Runtime}</p>
                        <p> Genre: {movieDetails.Genre}</p>
                        <p> Director: {movieDetails.Director}</p>
                        <p> Actors: {movieDetails.Actors}</p>
                        <p> Language: {movieDetails.Language}</p>
                        <p> Country: {movieDetails.Country}</p>
                        <p> Award: {movieDetails.Awards}</p>
                        <p> Box Office :{movieDetails.BoxOffice}</p>
                        {/*<SecureContent>*/}
                        {/*    <button onClick={handleLike}>Like ({ourMovieDetails && ourMovieDetails.likes})</button>*/}
                        {/*</SecureContent>*/}

                    {/*<Preformatted obj={movieDetails}/>*/}
                </div>
            </div>



                <div className="row ms-5 me-5 mt-5">
                    <h3 className="fw-bold wd-gold">User reviews</h3>
                    {reviews.length === 0 &&
                        <h5 className="wd-white">No reviews for this movie. Be the first!</h5>
                    }
                <ul className="list-group">
                    {
                        reviews && reviews.map(review =>
                            <ReviewItem key={review._id}
                                        item={review}/>)
                    }
                </ul>
                </div>

                        {/*<Preformatted obj={movieDetails}/>*/}
                    </div>
                </div>


    );
};

export default OmdbDetails;