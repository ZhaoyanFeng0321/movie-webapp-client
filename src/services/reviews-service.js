import axios from "axios";

const REVIEWS_API = 'https://sheltered-spire-42661.herokuapp.com/api/reviews';

export const findAllReviews = async () => {
    const response = await axios.get(REVIEWS_API);
    const reviews = response.data;
    return reviews;
}