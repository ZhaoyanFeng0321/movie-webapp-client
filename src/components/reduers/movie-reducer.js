import {CREATE_MOVIE, DELETE_MOVIE, FIND_ALL_MOVIES, UPDATE_MOVIE} from "../actions/movies-actions";
// import movies from "../data/watchlists.json"

const moviesReducer = (state = [], action) => {

        switch (action.type) {
            // The reducer is largely unaffected, but can be improved with the new string constants avoiding misspelling the strings.
            case FIND_ALL_MOVIES:
                return action.movies;

            case DELETE_MOVIE:
                return state.filter(
                    movie => movie._id !== action.movie._id);

            case CREATE_MOVIE:
                console.log(action.newMovie)

                return [
                    action.newMovie,
                    ...state,
                ];

            case UPDATE_MOVIE:
                return state.map(
                    movie => movie._id === action.movie._id ?
                            action.movie : movie);
            default:
                return state;
        }

        // case 'like-movie':                           // handle action.type 'like-movie' event
        //     return state.map(movie => {              // calculate a new state
        //         if (movie._id === action.movie._id) {  // if it's the movie we liked
        //             if (movie.liked === true) {       // and it's already liked
        //                 movie.liked = false;         // then unlike it
        //                 movie.likes--;         // and reduce likes count
        //             } else {                        // otherwise
        //                 movie.liked = true;          // like the movie
        //                 movie.likes++;         // and increment its like count
        //             }
        //             return movie;                    // include new movie changes in array of movies
        //         } else {                            // otherwise
        //             return movie;                    // keep the old movie object
        //         }
        //     });

        // // The dispatcher sends the action object to all reducers which we handle this particular type of event
        // case 'delete-movie':                             // handle new action type to delete a movie
        //     return state.filter(                        // calculate new state by
        //         movie => movie._id !== action.movie._id);  // filtering out the movie we deleted in the user interface
        //
        // default:
        //     return movies

}

export default moviesReducer;