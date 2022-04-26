import React from "react";
import reviewReducer from "../reducers/reviews-reducer";
import {Provider} from "react-redux";


import {combineReducers, createStore} from "redux";

import ReviewList from "../ReviewList/ReviewList";
import NavigationActor from "../Navigation/NavigationActor";
import Filmography from "../WatchList/Filmography";

const reducer = combineReducers({
    reviews: reviewReducer
});
const store = createStore(reducer);


const HomeScreen= () => {
    return (
        <Provider store={store}>
            <div className="row mt-3 ms-5 me-5">

                <NavigationActor/>
                <ReviewList/>
                <Filmography/>


            </div>
        </Provider>
    );
};

export default HomeScreen;