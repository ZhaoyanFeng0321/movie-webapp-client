import axios from "axios";
const BASE_URL = `https://sheltered-spire-42661.herokuapp.com`
const MOVIES_API = `${BASE_URL}/api/movies`;

export const findMovieById = (uid) =>
    axios.get(`${MOVIES_API}/${uid}`)
        .then(response => response.data);

const movie_service = {
    findMovieById
}

export default movie_service;