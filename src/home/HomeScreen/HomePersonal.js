import React from "react";
import reviewReducer from "../reducers/reviews-reducer";
import {Provider} from "react-redux";


import {combineReducers, createStore} from "redux";

import ReviewList from "../ReviewList/ReviewList";

import NavigationPersonal from "../Navigation/NavigationPersonal";
import WatchListPersonal from "../WatchList/WatchListPersonal";
import {Link} from "react-router-dom";
import WatchlistItem from "../WatchList/WatchlistItem";

const reducer = combineReducers({
    reviews: reviewReducer
});
const store = createStore(reducer);


const HomeScreen= ({profile,cur}) => {
    return (
        <Provider store={store}>
            <div className="row mt-3 ms-5 me-5">

                <NavigationPersonal/>
                <ReviewList/>
                {/*<WatchListPersonal/>*/}


                {profile.watchlist.length !== 0 &&
                    <div className="mt-5 mb-5">
                        <div className="row ">
                            <p className="wd-title wd-gold">What to watch</p>
                        </div>
                        <div className="row">
                            <p className="wd-title wd-white">From your watchlist ></p>
                        </div>
                        <section className="wd-slide-container">

                            <ul id="slide-list">
                                {
                                    profile.watchlist && profile.watchlist.map(movie => <WatchlistItem key={movie} movie={movie}/>)
                                }
                            </ul>

                        </section>

                    </div>
                }

                {profile.watchlist.length === 0 &&
                    <div className="mt-5 mb-5">
                        <div className="row ">
                            <p className="wd-title wd-gold">What to watch</p>
                        </div>
                        <div className="row">
                            <p className="wd-title wd-white">From your watchlist /></p>
                        </div>
                        <div className="mt-5 text-center">
                            <i className="fa fa-list wd-grey mb-3 fa-2x"/>
                            <p className="wd-white fw-bold">Your watchlist is empty</p>
                            <p className="wd-white">Save movies to keep track of what you want to watch.</p>
                            <Link to={`/search`}>
                                <button className="wd-browse-button">Search and add movies</button>
                            </Link>
                        </div>
                    </div>
                }


            </div>
        </Provider>
    );
};

export default HomeScreen;