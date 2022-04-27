import React from "react";
import reviewReducer from "../reducers/reviews-reducer";
import {Provider} from "react-redux";


import {combineReducers, createStore} from "redux";

import ReviewList from "../ReviewList/ReviewList";

import NavigationPersonal from "../Navigation/NavigationPersonal";
import WatchListPersonal from "../WatchList/WatchListPersonal";

const reducer = combineReducers({
    reviews: reviewReducer
});
const store = createStore(reducer);


const HomeScreen= () => {
    return (
        <Provider store={store}>
            <div className="row mt-3 ms-5 me-5">

                <NavigationPersonal/>
                <ReviewList/>
                <WatchListPersonal/>


            </div>
        </Provider>
    );
};

export default HomeScreen;