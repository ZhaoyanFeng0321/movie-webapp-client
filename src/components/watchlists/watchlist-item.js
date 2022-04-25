import React from "react";
import {useDispatch} from "react-redux";
import {deleteMovie} from "../actions/movies-actions";

const WatchlistItem = ({movie}) => {
    const dispatch = useDispatch();
    // const deleteMovie = (movie) => {
    //     dispatch({type: 'delete-movie', movie: movie})
    // }
    return (
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">

                    <div className="col-1">
                        <img src={movie["poster"]} alt="poster" width="35px"/>
                    </div>
                    <div className="col-11 ps-3">
                        {/*<i onClick={() =>                   // create new remove icon on top, right corner of*/}
                        {/*    deleteTuit(tweet)}              // each tuit. Bind click event with click handler*/}
                        {/*   className="fas fa-times-circle*/}
                        {/*fa-pull-right"></i>*/}
                        <i className="fas fa-times-circle float-end"
                           onClick={() => deleteMovie(dispatch, movie)}></i>

                        {movie.title}


                    </div>
                </div>
            </div>
        </>
    )
}

export default WatchlistItem
