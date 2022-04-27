import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";

const WatchlistItem = ({movie, deleteMovie}) => {

    // const deleteMovie = (movie) => {
    //     dispatch({type: 'delete-movie', movie: movie})
    // }

    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979&i='+ movie;
    const search = async () => { const response = await axios.get(`${searchUrl}`)
        setMovies(response.data) }
    useEffect(() => { search() }, [])

    return (
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">

                    <div className="col-1">
                        <img src={movies.Poster} alt="poster" width="35px"/>
                    </div>
                    <div className="col-11 ps-3">
                        {/*<i onClick={() =>                   // create new remove icon on top, right corner of*/}
                        {/*    deleteTuit(tweet)}              // each tuit. Bind click event with click handler*/}
                        {/*   className="fas fa-times-circle*/}
                        {/*fa-pull-right"></i>*/}
                        <i className="fas fa-times-circle float-end"
                           onClick={() => deleteMovie(movie._id)}></i>

                        {movies.Title}


                    </div>
                </div>
            </div>
        </>
    )
}

export default WatchlistItem