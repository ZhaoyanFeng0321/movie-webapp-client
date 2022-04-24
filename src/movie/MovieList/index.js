import React from "react";
import MovieListItem from "./MovieListItem"
import movie from "./movie.json";




const MovieList = () => {

    return (<>

        <ul className="list-group">
            <li className="list-group-item">Movie Details</li>
            {
                movie.map(movie => {
                    return <MovieListItem movie={movie}/>;
                })
            }


        </ul>

    </>); }

export default  MovieList;