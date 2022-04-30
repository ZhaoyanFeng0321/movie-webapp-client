import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {Link} from "react-router-dom";

const WatchlistItem = ({movie, deleteMovieForUser, profile, cur}) => {

    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979&i='+ movie;
    const search = async () => { const response = await axios.get(`${searchUrl}`)
        setMovies(response.data) }
    useEffect(() => { search() }, [])

    return (
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">
                    <div className="col-2 col-sm-0 col-md-2 d-none d-md-block">
                        <img src={movies.Poster} alt="poster" width="120px"/>
                    </div>

                    <div className="col-10 col-sm-12 col-md-10">
                        {
                            cur && profile.username === cur.username &&
                            <i className="fas fa-times-circle float-end"
                               style={{color:'#F5DE50'}}
                               onClick={() => deleteMovieForUser(profile.username, movie)}> </i>
                        }
                        {
                            cur && cur.accountType === "ADMIN" &&
                            <i className="fas fa-times-circle float-end"
                               style={{color:'#F5DE50'}}
                               onClick={() => deleteMovieForUser(profile.username, movie)}> </i>
                        }

                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>
                            <Link to={`/details/${movies.imdbID}`}>
                                {movies.Title} ({movies.Year})
                            </Link>
                        </div>
                        <div>Genre: {movies.Genre}</div>
                        <div style={{fontSize: 'small', color: 'lightgray', marginBottom: '5px'}}>Released On: {movies.Released}</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WatchlistItem