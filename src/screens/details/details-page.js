import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
//import Preformatted from "../../../movie-detail/src/components/preformatted";
// import SecureContent from "../components/secure-content";
import Navigation from "../../home/Navigation/Navigation";
import * as authService from "../../services/auth-service";
import NavigationPersonal from "../../home/Navigation/NavigationPersonal";
import {addMovieToList} from "../../services/auth-service";


const OmdbDetails = () => {
    const [movieDetails, setMovieDetails] = useState([])
    // const [ourMovieDetails, setOurMovieDetails] = useState({})
    const url = 'https://www.omdbapi.com/?apikey=b2bd5979'
    const {imdbID} = useParams()

    const [login, setLogin] = useState(false);
    const [currentUser,setCurrentUser] = useState({});
    // const searchMovieByImdbID = async () => {
    //     const response = await axios.get(`${url}&i=${imdbID}`)
    //     setMovieDetails(response.data)
    // }
    // const searchOurMovieByImdbID = async () => {
    //     const response = await axios.get(`http://localhost:4000/api/movies/${imdbID}`)
    //     setOurMovieDetails(response.data)
    // }
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
        // if(username!==user.username){
        //     user = await authService.findUser(username);
        // }else{
        //     user = await authService.findUser(username);
        //     setCurrentUser(user);
        // }
        // setProfile(user);


    },[])

    // useEffect(() => {
    //     searchMovieByImdbID()
    //     // searchOurMovieByImdbID()
    // }, [])

    // const handleLike = async () => {
    //     const movie = {
    //         title: movieDetails.Title,
    //         poster: movieDetails.Poster,
    //         imdbID: movieDetails.imdbID
    //     }
    //     const response = await axios.post("http://localhost:4000/api/likes", movie)
    //     setOurMovieDetails(response.data)
    // }

    const addMovieToList = async (uid, movieID) =>

            await authService.addMovieToList(uid, movieID);



    return (
        <div className="text-warning">

{/*<<<<<<< HEAD*/}
{/*            <div className="row mt-3 ms-5 me-5">*/}
{/*                /!*<Navigation/>*!/*/}
{/*            </div>*/}
{/*=======*/}
{/*            {currentUser.accountType !== "PERSONAL"  && currentUser.accountType !== "ACTOR"  &&currentUser.accountType !== "ADMIN"  &&*/}
{/*            {!login &&*/}
{/*                <div className="row mt-3 ms-5 me-5">*/}
{/*                    <Navigation/>*/}

{/*                </div>}*/}

{/*            /!*{(currentUser.accountType === "PERSONAL"|| currentUser.accountType === "ACTOR" || currentUser.accountType === "ADMIN")  &&*!/*/}
{/*            {login &&*/}
{/*                <div className="row mt-3 ms-5 me-5">*/}
{/*                    <NavigationPersonal/>*/}

{/*                </div>}*/}

            {/*<div className="row mt-3 ms-5 me-5">*/}
            {/*    <Navigation/>*/}

            {/*</div>*/}
{/*>>>>>>> 91772299754e40a9bd63a9680370a0868b5240f2*/}

            {/*<div className="row ms-5 me-5">*/}
            {/*    <Link to="/result/:movieSearch">*/}
            {/*        <i className="fa-solid fa-circle-chevron-left"></i>*/}
            {/*    </Link>*/}
            {/*</div>*/}

            <div>
            <div className="row ms-5 me-5">

                <h1 className="fw-bold wd-gold">{movieDetails.Title}</h1>
            </div>


            <div className="row ms-5 me-5">
                <div className="col-3">
                    <img src={movieDetails.Poster} height={300} alt=""/>
                    <p className="mt-3"><i className="fa-solid fa-star-sharp"></i> {movieDetails.imdbRating}</p>
                    {/*<button className="btn btn-warning"><i className="fa-solid fa-thumbs-up"></i> </button>*/}
                    <button onClick={()=>addMovieToList(currentUser._id, imdbID)} className="btn btn-block btn-warning" ><i className="fa-solid fa-plus"></i> Add to Watch</button>
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
            </div>
        </div>


    );
};

export default OmdbDetails;