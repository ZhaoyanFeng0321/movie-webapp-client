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
import {addMovieToList} from "../../services/auth-service";
import * as service from "../../services/review-service";
import ReviewItem from "./reviewItem";
import PostReview from "./post-review-component";
import ReviewItemAdmin from "./ReviewItemAdmin";


const OmdbDetails = () => {
    const [movieDetails, setMovieDetails] = useState([])
    const url = 'https://www.omdbapi.com/?apikey=b2bd5979'
    const {imdbID} = useParams()

    const [login, setLogin] = useState(false);
    const [currentUser,setCurrentUser] = useState(undefined);

    const searchMovieByImdbID = async (imdbID)=> {
        const response = await axios.get(`${url}&i=${imdbID}`)
        setMovieDetails(response.data)
    }
    useEffect(async ()=> {
        await searchMovieByImdbID(imdbID);
        try {
            let user = await authService.profile();
            setCurrentUser(user);
            setLogin(true);
        } catch (e) {
        }


    },[])



    const [reviews, setReviews] = useState([]);
    const findReviewsByOMDB = async () =>
        await service.findAllReviewByOMDB(imdbID)
            .then(reviews => setReviews(reviews));

    useEffect(async () => {
        try {
            await findReviewsByOMDB();
        }catch (e) {
        }

    },[])

    const deleteReview = async (rid) => {
        await service.deleteReview(rid).then(findReviewsByOMDB);
    }


    const addMovieToList = async (uid, movieID) =>

            await authService.addMovieToList(uid, movieID);



    return (
        <div className="text-warning">

            <div>
            <div className="row">

                <h1 className="fw-bold wd-gold">{movieDetails.Title}</h1>
            </div>


            <div className="row">
                <div className="col-3">
                    <img src={movieDetails.Poster} height={300} alt=""/>
                    <p className="mt-3"><i className="fa-solid fa-star-sharp"></i> {movieDetails.imdbRating}</p>
                    {/*<button className="btn btn-warning"><i className="fa-solid fa-thumbs-up"></i> </button>*/}
                    {currentUser!==undefined &&<button onClick={()=>addMovieToList(currentUser.username, imdbID)} className="btn btn-block btn-warning" ><i className="fa-solid fa-plus"></i></button>}
                </div>


                <div className="col-9 d-none d-lg-block">
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

                    {currentUser!==undefined &&<PostReview mid={imdbID} findReviewsByOMDB={findReviewsByOMDB}/>}


                </div>
            </div>


                <div className="row mt-5 mb-5">
                    <h3 className="fw-bold wd-gold">User reviews</h3>
                    {reviews.length === 0 &&
                        <h5 className="wd-white">No reviews for this movie. Be the first!</h5>
                    }
                <ul className="list-group">

                    {currentUser && currentUser.accountType ==="ADMIN" ? (
                        reviews && reviews.map(review =>
                            <ReviewItemAdmin key={review._id}
                                        item={review} deleteReview={deleteReview}/>)) : (reviews && reviews.map(review =>
                        <ReviewItem key={review._id}
                                    item={review}/>))}

                </ul>
                </div>

            </div>
        </div>


    );
};

export default OmdbDetails;