import ProfileComponent from "./ProfileComponent";
import ReviewList from "../reviews/review-list"
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import profileReducer from "../reduers/profile-reducer";
import moviesReducer from "../reduers/movie-reducer";
import Watchlist from "../watchlists/watchlist";

// const reducer = combineReducers({profile: profileReducer, movie: moviesReducer})
// const store = createStore(reducer);

const ProfileScreen = () => {
    return(
        // <Provider store={store}>
            <div>
                <ProfileComponent/>
                <ReviewList/>
                <br/>
                <Watchlist/>
            </div>
        // </Provider>
    )
}

export default ProfileScreen;