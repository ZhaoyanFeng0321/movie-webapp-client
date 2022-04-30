import axios from "axios";
const BASE_URL = `http://localhost:4000`

const LOGIN_API = `${BASE_URL}/api/login`;
const USERS_API = `${BASE_URL}/api/users`;

export const createUser = (user) =>
    axios.post(`${USERS_API}`, user)
        .then(response => response.data);

export const findAllUsers = () =>
    axios.get(USERS_API)
        .then(response => response.data);

export const findUserById = (uid) =>
    axios.get(`${USERS_API}/${uid}`)
        .then(response => response.data);

export const findUserByUsername = (username) =>
    axios.get(`${USERS_API}/username/${username}`)
        .then(response => response.data)

export const deleteUser = (uid) =>
    axios.delete(`${USERS_API}/${uid}`)
        .then(response => response.data);

export const deleteUsersByUsername = (username) =>
    axios.get(`${USERS_API}/username/${username}/delete`)
        .then(response => response.data);

export const findUserByCredentials = (credentials) =>
    axios.post(`${LOGIN_API}`, credentials)
        .then(response => response.data);

export const findWhoToFollow = (uid) =>
    axios.get(`${USERS_API}/follow/${uid}/whotofollow`)
        .then(response=>response.data);

const service = {
    findAllUsers,createUser,findWhoToFollow,findUserByCredentials,deleteUsersByUsername,findUserById, findUserByUsername
}

export default service;