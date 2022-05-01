import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import "./profile.css"
import WatchlistItem from "../../home/WatchList/WatchlistItem";
import * as service from "../../services/auth-service";
import {createWatchListByUser} from "../../services/auth-service";
import FollowList from "../follow/follow-list";
import FollowedList from "../follow/followed-list";
import * as followService from "../../services/follow-service";

const ActorProfile = ({actor, cur, onEdit}) => {
    const [wlist, setMovies] = useState([]);
    const [follow, setFollow] = useState(false);
    const username = useParams();

    const findMovies =  async (name) => {
        await service.findWatchListByUser(name).then(list =>setMovies(list.movie));
    }
    const changeFollow = async (cur, pro)=> {
        let fl = await followService.findUserFollowUser(cur, pro);
        if (fl) {
            setFollow(false);
            await followService.deleteFollowing(cur,pro);
        } else {
            setFollow(true);
            await followService.followUser(cur,pro);
        }
    }

    useEffect(async () => {
        try {
            if (cur&& actor.username !== cur.username) {
                if (await followService.findUserFollowUser(cur.username, actor.username)){
                    setFollow(true);
                }
            }
            await findMovies(actor.username);
        } catch (e) {
            await createWatchListByUser({user:actor.username, movie:[]})
                .then(list=>setMovies(list.movie));
        }
    },[actor, username])

    return (
        <div className="mb-4 mt-2">
            <div className="mb-1">

                <Link to={`/home`}><i
                    className="far fa-arrow-alt-circle-left fa-lg wd-imbd-yellow"> </i></Link>
                <span className="wd-profile-name ms-3">Home</span>
            </div>
            {
                cur && actor.username === cur.username
                && <div className="d-flex flex-row-reverse">
                    <button type='submit' className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right"
                            onClick={onEdit}>
                        Edit Profile
                    </button>

                </div>

            }
            {
                cur && actor.username !== cur.username
                && <div className="d-flex flex-row-reverse">
                    <button type="button" onClick={() => changeFollow(cur.username, actor.username)} className="float-end btn btn-warning rounded-pill">
                        {follow? `Unfollow`:`Follow`}
                    </button>

                </div>

            }
            <div className="row">
                <div className="col-4 col-sm-12 col-md-4">
                    <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px pf-profile-image"
                         src={actor.profilePhoto === undefined
                              ? "https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png"
                              : `${actor.profilePhoto}`}/>
                </div>

                <div className="col-8 col-sm-0 col-md-8 d-none d-md-block">
                    <div><span
                        className="wd-profile-username">{actor.firstName} {actor.lastName}</span>
                        <div className="fa-stack" style={{"fontSize": "0.7em"}}>
                            <i className="fas fa-circle fa-stack-2x wd-imbd-yellow"></i>
                            <i className="fas fa-check fa-stack-1x wd-black"></i>
                            <span style={{marginLeft: '30px', fontSize: '20px'}}> @{actor.username}</span>
                        </div>
                    </div>

                </div>
            </div>

            {wlist.length !== 0 &&
                <div className="mt-5 mb-5">

                    <div className="row">
                        <Link to={'/list'} className="wd-title wd-gold">Filmography</Link>
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

            {cur&&wlist.length === 0 && actor.username === cur.username &&
                <div className="mt-5 mb-5">

                    <div className="row">
                        <Link to={'/list'} className="wd-title wd-gold">Filmography</Link>
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

            {cur&&wlist.length === 0 && actor.username !== cur.username &&
                <div className="mt-5 mb-5">

                    <div className="row">
                        <p className="wd-title wd-gold">Filmography</p>
                    </div>
                    <h5>This actor hasn't added any movies to his filmography.</h5>

                </div>
            }
            {
                cur && actor.username === cur.username &&
                <FollowList profile={actor} cur={cur}/>
            }
            {
                cur && actor.username === cur.username &&
                <FollowedList profile={actor} cur={cur}/>
            }

        </div>
    )
}

export default ActorProfile;