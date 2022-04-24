import * as service from '../services/movies-service';

export const CREATE_MOVIE = 'CREATE_MOVIE';
export const FIND_ALL_MOVIES = 'FIND_ALL_MOVIES';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';


export const createMovie = async (dispatch, movie) => {
    const newMovie = await service.createMovie(movie);
    dispatch({
                 type: CREATE_MOVIE,
                 newMovie
             });
}

export const findAllMovies = async (dispatch) => {
    const movies = await service.findAllMovies();
    dispatch({
                 type: FIND_ALL_MOVIES,
                 movies
             });
}


export const updateMovie = async (dispatch, movie) => {
    const status = await service.updateMovie(movie);
    if (status.acknowledged === true) {
        dispatch({
                     type: UPDATE_MOVIE,
                     movie
                 });
    }
}

export const deleteMovie = async (dispatch, movie) => {
    const response = await service.deleteMovie(movie);
    if (response.acknowledged === true) {
        dispatch({
                     type: DELETE_MOVIE,
                     movie
                 })
    }

}