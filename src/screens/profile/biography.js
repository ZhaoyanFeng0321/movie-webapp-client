import React, {useState} from "react";
import {useEffect} from "react";
import WatchlistItem from "./watchlist-item";
import {useParams} from "react-router-dom";
import * as authService from "../../services/auth-service";

const Biography = ({profile, cur}) => {
    const [wlist, setMovies] = useState([]);

    const findMovies = (user) => {
        const wlist = user.watchlist;
        setMovies(wlist);
    }

    useEffect(async () => {
        try {
            findMovies(profile);
        } catch (e) {
        }
    },[])


    const deleteMovieForUser = async (mid) => {
        await authService.removeMovieFromList(profile._id, mid)
        // await findMovies(updateUser);
        const newList = wlist.filter(m => m !== mid);
        setMovies(newList);
    }

    return (
        <>

            <h3 style={{marginTop:'10px', color:'#F5DE50'}}>Biography</h3>

            <ul className="list-group">
                {
                    wlist && wlist.map(movie =>
                                           <WatchlistItem key={movie}
                                                          movie={movie}
                                                          deleteMovieForUser={deleteMovieForUser}
                                                          profile={profile}
                                                          cur={cur}/>)
                }
            </ul>
        </>
    );
}

export default Biography;