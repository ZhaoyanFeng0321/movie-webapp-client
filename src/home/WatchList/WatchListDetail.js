import React, {useState} from "react";
import {useEffect} from "react";
import WatchlistItem from "./watchlist-item";
import {useParams} from "react-router-dom";
import * as authService from "../../services/auth-service";

const WatchlistDetail = ({profile}) => {

    const [user, setUser] = useState(undefined);
    const [wlist, setMovies] = useState([]);

    const findMovies = (user) => {
        const wlist = user.watchlist;
        setMovies(wlist);
    }

     // console.log(profile._id);

    useEffect(async () => {
        try {
            // const u = await authService.findUser(username)
            // setUser(u);
            findMovies(profile.username);
        } catch (e) {
        }
    },[])


    const deleteMovieForUser = async (mid) => {
        await authService.removeMovieFromList(profile._id, mid)
        const newList = profile.watchlist.filter(m => m !== mid);
        setMovies(newList);
    }

    // console.log(profile.watchlist);

    return (
        <>
                <div className="mb-5">
                    <div className="row">
                        <p className="wd-title wd-gold">From your watchlist ></p>
                    </div>
                    <div className="list-group">


                            {
                                profile.watchlist && profile.watchlist.map(movie => <WatchlistItem key={movie} wlist={wlist} movie={movie} profile={profile}/>)
                            }


                    </div>

                </div>

        </>
    );
}

export default WatchlistDetail;