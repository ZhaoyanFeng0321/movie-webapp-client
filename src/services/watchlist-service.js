import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const USER_API = `${API_BASE}/users`

// export const findAllMoviesByUser = async (uid) => {
//     const response = await axios
//         .get(`${USER_API}/${uid}/watchlist`);
//     const watchlist = response.data;
//     return watchlist;
// }

export const deleteMovie = async (uid,mid) => {
    const response = await axios
        .delete(`${USER_API}/${uid}/collects/${mid}`);
    return response.data;
}