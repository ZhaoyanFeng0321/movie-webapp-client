import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const REVIEWS_API = `${API_BASE}/reviews`;
const USER_API = `${API_BASE}/users`

export const createReview = async (uid, mid, review) => {
    const response = await axios.post(`${USER_API}/${uid}/reviews/${mid}`, review)
    return response.data;
}

export const findAllReviews = async () => {
    const response = await axios.get(REVIEWS_API);
    const reviews = response.data; // The data in the response is the tuits array sent back from findAllTuits in tuits-controller.js and it's embedded in the response's data property.
    return reviews;
}

export const deleteReview = async (rid) => {
    const response = await axios
        .delete(`${REVIEWS_API}/${rid}`);
    return response.data;
}

export const updateReview = async (review) => {
    const response = await axios
        .put(`${REVIEWS_API}/${review._id}`, review);
    return response.data;
}

export const findAllReviewsByUser = async (uid) => {
    const response = await axios
        .get(`${USER_API}/${uid}/reviews`);
    const reviews = response.data; // The data in the response is the tuits array sent back from findAllTuits in tuits-controller.js and it's embedded in the response's data property.
    return reviews;
}