import React from 'react';
import {useEffect,useRef,useState} from "react";
import axios from "axios";
import Preformatted from "../components/preformatted";
import {Link,useNavigate,useParams} from "react-router-dom"

const OmdbSearch = () => {
    const titleSearchRef = useRef() //talk to low level dom element
    const {movieSearch} = useParams()
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979'

    const searchByTitle = async () => {
        const searchString = titleSearchRef.current.value || movieSearch ||'everything '
        const response = await axios.get(`${searchUrl}&s=${searchString}`)
        setMovies(response.data.Search)
        titleSearchRef.current.value = searchString
        navigate(`/search/${searchString}`)
    }
    useEffect(() => {
        searchByTitle()
    }, [])

    return (
        <div  className="row bg-dark text-warning">
        <div>
            <h1>Movie Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={searchByTitle} className="btn btn alert-primary float-end">Search Movie</button>
                    <input ref={titleSearchRef} className="form-control w-75"/>
                </li>
                {
                    movies.map(movie =>
                        <li className="list-group-item">
                            <Link to={`/details/${movie.imdbID}`}>
                            <img className="me-5 rounded" src={movie.Poster} height={100}/>
                            {movie.Title}
                            </Link>
                        </li>
                    )
                }
            </ul>
            {/*<pre>*/}
            {/*    <Preformatted obj={movies}/>*/}
            {/*</pre>*/}
            
        </div>
        </div>
    );
};

export default OmdbSearch;