import React, {useState} from "react";
import {useEffect} from "react";
import WatchlistItem from "./watchlist-item";
import {useParams} from "react-router-dom";
import * as authService from "../../services/auth-service";

const Watchlist = ({profile, cur}) => {
    const {username} = useParams();
    const [user, setUser] = useState(undefined);
    const [wlist, setMovies] = useState([]);

    const findMovies = (user) => {
        const wlist = user.watchlist;
        setMovies(wlist);
    }

    //const [wlist, setWlist] = useState([]);
    useEffect(async () => {
        try {
            const u = await authService.findUser(username)
            setUser(u);
            findMovies(u);
        } catch (e) {
        }
    },[])


    const deleteMovieForUser = async (mid) => {
        await authService.removeMovieFromList(user._id, mid)
        const newList = wlist.filter(m => m !== mid);
        setMovies(newList);
    }

    return (
        <>
            {
                profile.accountType === "ACTOR" &&
                <h3 style={{marginTop:'10px', color:'#F5DE50'}}>Biography</h3>
            }
            {
                profile.accountType !== "ACTOR" &&
                <h3 style={{marginTop:'10px', color:'#F5DE50'}}>Watchlist</h3>

            }

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

export default Watchlist;