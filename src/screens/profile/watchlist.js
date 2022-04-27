import React, {useState} from "react";
import {useEffect} from "react";
import WatchlistItem from "./watchlist-item";
import {useParams} from "react-router-dom";
import * as authService from "../../services/auth-service";

const Watchlist = () => {
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
        const updateUser = await authService.removeMovieFromList(user._id, mid)
        await findMovies(updateUser);
    }

    return (
        <>
            <h3 style={{marginTop:'10px', color:'#F5DE50'}}>Your Watchlist</h3>
            <ul className="list-group">
                {
                    wlist && wlist.map(movie =>
                                             <WatchlistItem key={movie}
                                                            movie={movie}
                                                            deleteMovieForUser={deleteMovieForUser}
                                                            />)
                }
            </ul>
        </>
    );
}

export default Watchlist;