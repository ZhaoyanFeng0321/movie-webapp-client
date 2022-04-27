import React, {useState} from "react";
import {useEffect} from "react";
import WatchlistItem from "./watchlist-item";
import {useNavigate, useParams} from "react-router-dom";
import * as service from "../../services/watchlist-service";
import * as authService from "../../services/auth-service";

const Watchlist = ({wlist=[], refreshWatchlist}) => {
    // const {username} = useParams();
    //
    // const [profile, setProfile] = useState(undefined);
    // const [user, setUser] = useState(undefined);
    //
    // const [movies, setMovies] = useState([]);
    // const navigate = useNavigate();
    //
    // const findWatchlistByUser = async (u) =>
    //     await service.findAllMoviesByUser(u._id)
    //         .then(movies => setMovies(movies));
    //
    // useEffect(async () => {
    //     try {
    //         const currentUser = await authService.findUser(username);
    //         setUser(currentUser);
    //         findWatchlistByUser(currentUser);
    //
    //         const currentProfile = await authService.profile();
    //         if(currentProfile) {
    //             setProfile(currentProfile);
    //         }
    //     }catch (e) {
    //     }
    // },[])
    //
    const deleteMovieForUser = async (mid) => {
            await service.deleteMovie(mid)
                .then(refreshWatchlist);
    }

    // const movies = useSelector(state => state.movies);
    //
    // const dispatch = useDispatch();
    //
    // useEffect(() => findAllMovies(dispatch),[dispatch]);

    return (
        <>
            <h3 style={{color:'#F5DE50'}}>Your Watchlist</h3>
            <ul className="list-group">
                {
                    wlist && wlist.map(movie =>
                                             <WatchlistItem key={movie}
                                                            movie={movie}
                                                            deleteMovie={deleteMovieForUser}/>)
                }
            </ul>
        </>
    );
}

export default Watchlist;