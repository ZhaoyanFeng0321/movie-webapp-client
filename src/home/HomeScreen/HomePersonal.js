import React, {useEffect, useState} from "react";
import reviewReducer from "../reducers/reviews-reducer";
import {Provider} from "react-redux";


import {combineReducers, createStore} from "redux";

import ReviewList from "../ReviewList/ReviewList";

import NavigationPersonal from "../Navigation/NavigationPersonal";
import WatchListPersonal from "../WatchList/WatchListPersonal";
import {Link} from "react-router-dom";
import WatchlistItem from "../WatchList/WatchlistItem";
import * as service from "../../services/auth-service";
import {createWatchListByUser} from "../../services/auth-service";

const reducer = combineReducers({
    reviews: reviewReducer
});
const store = createStore(reducer);


const HomeScreen= ({profile,cur}) => {
    const [wlist, setMovies] = useState([]);

    const findMovies =  async (name) => {
        await service.findWatchListByUser(name).then(list =>setMovies(list.movie));
    }

    useEffect(async () => {
        try {
            await findMovies(profile.username);
        } catch (e) {
            await createWatchListByUser({user:profile.username, movie:[]})
                .then(list=>setMovies(list.movie));
        }
    },[profile])


    return (
        <Provider store={store}>
            <div className="row mt-3 ms-5 me-5">

                <ReviewList/>

                {wlist.length !== 0 &&
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
                                    wlist && wlist.map(movie => <WatchlistItem key={movie} movie={movie}/>)
                                }
                            </ul>

                        </section>

                    </div>
                }

                {wlist.length === 0 &&
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
                            <Link to={`/search/${cur}`}>
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