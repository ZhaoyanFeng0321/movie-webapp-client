import React, {useState} from "react";
import {useEffect} from "react";
import WatchlistItem from "./watchlist-item";
import {useNavigate, useParams} from "react-router-dom";
import * as service from "../../services/watchlist-service";
import * as authService from "../../services/auth-service";

const Watchlist = () => {
    const {username} = useParams();
    //
  //  const [profile, setProfile] = useState(undefined);
    const [user, setUser] = useState(undefined);
    //
    const [wlist, setWlist] = useState([]);
    const navigate = useNavigate();
    //
    const findWatchlistByUser = async (user) =>
        setWlist(user.watchlist);

    useEffect(async () => {
        try {
            let currentUser = await authService.findUser(username);
            findWatchlistByUser(currentUser);
           // setWlist(currentUser.watchlist);
            // const currentProfile = await authService.profile();
            // if(currentProfile) {
            //     setProfile(currentProfile);
            // }
        }catch (e) {
        }
    },[])


    //const [newlist, setWlist] = useState([]);

    const deleteMovieForUser = (mid) => {
        const newWatchlist = wlist.filter(movie => movie !== mid);
        setUser({...user, watchlist: newWatchlist});
        authService.update(user).then(findWatchlistByUser(user));
    }

    // const movies = useSelector(state => state.movies);
    //
    // const dispatch = useDispatch();
    //
    // useEffect(() => findAllMovies(dispatch),[dispatch]);

    return (
        <>
            <h3 style={{marginTop:'10px', color:'#F5DE50'}}>Watchlist</h3>
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