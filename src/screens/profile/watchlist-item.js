import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";

const WatchlistItem = ({movie, deleteMovieForUser}) => {

    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979&i='+ movie;
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
                           onClick={() => deleteMovieForUser(movie)}> </i>

                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>{movies.Title} ({movies.Year})</div>
                        <div>Genre: {movies.Genre}</div>
                        <div style={{fontSize: 'small', color: 'lightgray', marginBottom: '5px'}}>Released On: {movies.Released}</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WatchlistItem