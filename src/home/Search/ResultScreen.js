
import Navigation from "../Navigation/Navigation";
import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import * as authService from "../../services/auth-service";
import NavigationPersonal from "../Navigation/NavigationPersonal";


const ResultScreen = () =>{
    const [login,setLogin] =useState(false);
    const[currentUser, serCurrentUser] = useState({});

    const titleRef = useRef()
    const {movieSearch} = useParams()
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979'
    const searchByTitle = async () => {
        const searchStr = titleRef.current.value || movieSearch || null
        const response = await axios.get(`${searchUrl}&s=${searchStr}`)
        setMovies(response.data.Search)
        titleRef.current.value = searchStr
        if(searchStr !== null && response.data.Response !=='False'){
            navigate(`/result/${searchStr}`)
        }
        else if(response.data.Response ==='False'){
            alert(response.data.Error + " Please try again.")
            navigate(`/search/`)

        }
    }

    useEffect(async () => {
        searchByTitle();
        try {
            let user = await authService.profile();
            serCurrentUser(user);
            setLogin(true);
        }catch(e){}
    },[])


    const addMovieToList = async (name, movieID) =>

        await authService.addMovieToList(name, movieID);

return(
        <>
            {/*{!login &&*/}
            {/*    <div className="row mt-3 ms-5 me-5">*/}
            {/*        <Navigation/>*/}
            {/*    </div>}*/}

            {/*{login&&*/}
            {/*    <div className="row mt-3 ms-5 me-5">*/}
            {/*        <NavigationPersonal/>*/}
            {/*    </div>}*/}


            <div className="row ms-5 me-5">

            <input ref={titleRef}className="form-control w-75" placeholder="Search movies.."/>
            <button className="btn btn-primary float-end w-25" onClick={searchByTitle}>Search</button>


            <p className="wd-title wd-gold mt-3">Search Results</p>
            <ul className="list-group">
                {
                    movies.map(movie =>
                        <li className="list-group-item">
                            <div className="row mt-2">
                                <div className="col-3">
                                    <Link to={`/details/${movie.imdbID}`}>
                                        <img src={movie.Poster} height={100} alt=""/>
                                    </Link>

                                </div>
                                <div className="col-9 col-sm-8">
                                    <Link to={`/details/${movie.imdbID}`} className="wd-link">
                                        <span className="fw-bold wd-gold">{movie.Title}</span>
                                    </Link>

                                    <i className="fa fa-solid fa-plus-circle ms-3 wd-gold fs-5 fa-2x" onClick={()=>addMovieToList(currentUser.username, movie.imdbID)}/>

                                    <p>Year: {movie.Year}</p>
                                    <p>Type: {movie.Type}</p>
                                </div>


                            </div>




                        </li>)
                }
            </ul>

        </div>
</>
    );

}
export default ResultScreen;