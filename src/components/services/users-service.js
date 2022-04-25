import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const USERS_API = `${API_BASE}/users`;

export const createUser = async (user) => {
    const response = await axios.post(USERS_API, user)
    return response.data;
}

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    const users = response.data; // The data in the response is the tuits array sent back from findAllTuits in tuits-controller.js and it's embedded in the response's data property.
    return users;
}

export const deleteUser = async (user) => {
    const response = await axios
        .delete(`${USERS_API}/${user._id}`);
    return response.data;
}

export const updateUser = async (user) => {
    const response = await axios
        .put(`${USERS_API}/${user._id}`, user);
    return response.data;
}