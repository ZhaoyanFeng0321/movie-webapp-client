import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const WatchlistItem = ({movie}) => {

    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979&i='+ movie;
    const search = async () => { const response = await axios.get(`${searchUrl}`)
        setMovies(response.data) }
    useEffect(() => {
        async function search() {
            const response = await axios.get(`${searchUrl}`)
            setMovies(response.data)
        }search();

    },);
    // useEffect(() => { search() }, )

    return (
        <>

            <Link to={`/details/${movies.imdbID}`}><img src={movies.Poster} alt="poster" className="wd-poster"/></Link>

        </>
    )
}

export default WatchlistItem