import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const MOVIES_API = `${API_BASE}/movies`;

export const createMovie = async (movie) => {
    const response = await axios.post(MOVIES_API, movie)
    return response.data;
}

export const findAllMovies = async () => {
    const response = await axios.get(MOVIES_API);
    const movies = response.data; // The data in the response is the tuits array sent back from findAllTuits in tuits-controller.js and it's embedded in the response's data property.
    return movies;
}

export const deleteMovie = async (movie) => {
    const response = await axios
        .delete(`${MOVIES_API}/${movie._id}`);
    return response.data;
}

export const updateMovie = async (movie) => {
    const response = await axios
        .put(`${MOVIES_API}/${movie._id}`, movie);
    return response.data;
}