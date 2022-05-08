import axios from "axios";
//const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = `https://sheltered-spire-42661.herokuapp.com`
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

export const removeMovieFromList = (username, mid) =>
    api.put(`${BASE_URL}/api/users/${username}/watchlist/${mid}`)
        .then(response=>response.data);

export const addMovieToList = (username, mid) =>
    api.put(`${BASE_URL}/api/users/${username}/likeMovie/${mid}`)
        .then(response=>response.data);

export const findWatchListByUser = (username) =>
    api.get(`${BASE_URL}/api/watchlist/${username}`)
        .then(response => response.data);


export const createWatchListByUser = (list) =>
    api.post(`${BASE_URL}/api/watchlist`, list)
        .then(response=>response.data);