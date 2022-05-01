import React, {useEffect, useState} from "react";
import reviewReducer from "../reducers/reviews-reducer";
import {Provider} from "react-redux";


import {combineReducers, createStore} from "redux";

import ReviewList from "../ReviewList/ReviewList";

import {Link} from "react-router-dom";
import WatchlistItem from "../WatchList/WatchlistItem";
import NavigationPersonal from "../Navigation/NavigationPersonal";
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
            <div className="row mt-3">

                {/*<NavigationPersonal/>*/}
                <ReviewList/>
                {/*<Filmography/>*/}
                {wlist.length !== 0 &&
                    <div className="mt-5 mb-5">

                        <div className="row">
                            <Link to={'/list'} className="wd-title wd-gold">Your Filmography ></Link>
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

                        <div className="row">
                            <Link to={'/list'} className="wd-title wd-gold">Your Filmography ></Link>
                        </div>
                        <div className="mt-5 text-center">
                            <i className="fa fa-list wd-grey mb-3 fa-2x"/>
                            <p className="wd-white fw-bold">Your filmography is empty</p>
                            <p className="wd-white">Save movies to keep track of what you have acted.</p>
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