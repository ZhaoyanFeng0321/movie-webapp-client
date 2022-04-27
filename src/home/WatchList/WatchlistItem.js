import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";

const WatchlistItem = ({movie}) => {

    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979&i='+ movie;
    const search = async () => { const response = await axios.get(`${searchUrl}`)
        setMovies(response.data) }
    useEffect(() => { search() }, [])

    return (
        <>

                <img src={movies.Poster} alt="poster" className="wd-poster"/>

        </>
    )
}

export default WatchlistItem