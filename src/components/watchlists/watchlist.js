import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllMovies} from "../actions/movies-actions";
import WatchlistItem from "./watchlist-item";

const Watchlist = () => {
    const movies = useSelector(state => state.movies);

    // const dispatch = useDispatch();

    // useEffect(() => findAllMovies(dispatch),[dispatch]);


    return (
        <>
            <h3 style={{color:'#F5DE50'}}>Your Watchlist</h3>
        <ul className="list-group">
            {
                movies && movies.map(movie =>
                                           <WatchlistItem key={movie._id}
                                                         movie={movie}/>)
            }
        </ul>
        </>
    );
}

export default Watchlist;