import React from "react";
import reviewReducer from "../reducers/reviews-reducer";
import {Provider} from "react-redux";


import {combineReducers, createStore} from "redux";

import ReviewList from "../ReviewList/ReviewList";

import {Link} from "react-router-dom";
import WatchlistItem from "../WatchList/WatchlistItem";
import NavigationPersonal from "../Navigation/NavigationPersonal";
import ReviewListAdmin from "../ReviewList/ReviewListAdmin";

const reducer = combineReducers({
    reviews: reviewReducer
});
const store = createStore(reducer);


const HomeScreen= ({profile,cur}) => {
    return (
        <Provider store={store}>
            <div className="row mt-3">

                {/*<NavigationPersonal/>*/}
                <ReviewListAdmin/>


            </div>
        </Provider>
    );
};

export default HomeScreen;