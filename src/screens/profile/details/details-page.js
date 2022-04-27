import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
//import Preformatted from "../../../movie-detail/src/components/preformatted";
// import SecureContent from "../components/secure-content";
import Navigation from "../../../home/Navigation/Navigation";

const OmdbDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    // const [ourMovieDetails, setOurMovieDetails] = useState({})
    const url = 'https://www.omdbapi.com/?apikey=b2bd5979'
    const {imdbID} = useParams()
    const searchMovieByImdbID = async () => {
        const response = await axios.get(`${url}&i=${imdbID}`)
        setMovieDetails(response.data)
    }
    // const searchOurMovieByImdbID = async () => {
    //     const response = await axios.get(`http://localhost:4000/api/movies/${imdbID}`)
    //     setOurMovieDetails(response.data)
    // }

    useEffect(() => {
        searchMovieByImdbID()
        // searchOurMovieByImdbID()
    }, [])

    // const handleLike = async () => {
    //     const movie = {
    //         title: movieDetails.Title,
    //         poster: movieDetails.Poster,
    //         imdbID: movieDetails.imdbID
    //     }
    //     const response = await axios.post("http://localhost:4000/api/likes", movie)
    //     setOurMovieDetails(response.data)
    // }

    return (
        <div className="bg-black text-warning">

            <div className="row mt-3 ms-5 me-5">
                <Navigation/>

            </div>

            <div className="row">

                <h1 className="fw-bold wd-gold">{movieDetails.Title}</h1>
            </div>


            <div className="row">
                <div className="col-3">
                    <img src={movieDetails.Poster} height={300}/>
                    <p className="mt-3"><i className="fa-solid fa-star-sharp"></i> {movieDetails.imdbRating}</p>
                    <button className="btn btn-warning">Like</button>
                    <button className="btn btn-warning ms-3">Add to </button>
                </div>


                <div className="col-9">
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
        </div>


    );
};

export default OmdbDetails;