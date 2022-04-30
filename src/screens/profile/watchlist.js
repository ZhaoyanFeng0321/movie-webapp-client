import React, {useState} from "react";
import {useEffect} from "react";
import WatchlistItem from "./watchlist-item";
import * as service from "../../services/auth-service";
import {createWatchListByUser} from "../../services/auth-service";

const Watchlist = ({profile, cur}) => {
    //const {username} = useParams();
    const [wlist, setMovies] = useState([]);
    const [user, setUser] = useState([]);

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
    },[wlist])


    const deleteMovieForUser = async (username, mid) => {
        await service.removeMovieFromList(username, mid).catch(e => alert(e));
        await findMovies(username);

    }

    return (
        <>
            {
                profile.accountType === "ACTOR" &&
                <h3 className="wd-gold">Filmography</h3>
            }
            {
                profile.accountType !== "ACTOR" &&
                <h3 className="wd-gold">Watchlist</h3>

            }

            <ul className="list-group">
                {wlist.length === 0 &&
                <h3 className="wd-white">Your watchlist is empty!</h3>}
                {wlist.length!==0 &&
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