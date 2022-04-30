import axios from "axios";
//const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = `http://localhost:4000`
const AUTH_API = `${BASE_URL}/api/auth`;

const api = axios.create({
                             withCredentials:true
                         });

export const signup = (user) =>
    api.post(`${AUTH_API}/signup`,user)
        .then(response => response.data);

export const profile = () =>
    api.post(`${AUTH_API}/profile`)
        .then(response => response.data);


export const logout = (user) =>
    api.post(`${AUTH_API}/logout`,user)
        .then(response => response.data);

export const login = (credentials) =>
    api.post(`${AUTH_API}/login`,credentials)
        .then(response => response.data);

export const findUser = (username) =>
    api.get(`${BASE_URL}/api/users/username/${username}`)
        .then(response=>response.data);

export const update = (user) =>
    api.put(`${BASE_URL}/api/users/${user._id}`,user)
        .then(response=>response.data);

export const removeMovieFromList = (uid, mid) =>
    api.put(`${BASE_URL}/api/users/${uid}/watchlist/${mid}`)
        .then(response=>response.data);

export const addMovieToList = (uid, mid) =>
    api.put(`${BASE_URL}/api/users/${uid}/likeMovie/${mid}`)
        .then(response=>response.data);
