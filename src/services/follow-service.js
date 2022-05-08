import axios from "axios";

const API_BASE = `https://sheltered-spire-42661.herokuapp.com/api`;
const USER_API = `${API_BASE}/users`

export const findAllFollowingsOfUser = async (username) => {
    const response = await axios
        .get(`${USER_API}/${username}/followings`);
    const follows = response.data; // The data in the response is the tuits array sent back from findAllTuits in tuits-controller.js and it's embedded in the response's data property.
    return follows;
}

export const findAllFollowedUser = async (username) => {
    const response = await axios
        .get(`${USER_API}/${username}/followers`);
    const follows = response.data; // The data in the response is the tuits array sent back from findAllTuits in tuits-controller.js and it's embedded in the response's data property.
    return follows;
}

export const deleteFollowing = async (username, followingname) => {
    const response = await axios
        .delete(`${USER_API}/${username}/unfollows/${followingname}`);
    return response.data;
}
export const findUserFollowUser = async (username, followingname) => {
    const response = await axios
        .get(`${USER_API}/${username}/follows/${followingname}`);
    return response.data;
}
export const followUser = async (username, followingname) => {
    const response = await axios
        .post(`${USER_API}/${username}/follows/${followingname}`);
    return response.data;
}
