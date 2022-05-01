import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import "./profile.css"
import ReviewList from "./reviewlist";
import * as service from "../../services/auth-service";
import {createWatchListByUser} from "../../services/auth-service";
import WatchlistItem from "../../home/WatchList/WatchlistItem";
import WatchListPersonal from "../../home/WatchList/WatchListPersonal";
import FollowedList from "../follow/followed-list";
import FollowList from "../follow/follow-list";
import * as followService from "../../services/follow-service";

const UserProfile = ({profile, cur, onEdit}) => {
    const [wlist, setMovies] = useState([]);
    const [follow, setFollow] = useState(false);

    const findMovies = async (name) => {
        await service.findWatchListByUser(name).then(list => setMovies(list.movie));
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
            if (cur&& profile.username !== cur.username) {
                if (await followService.findUserFollowUser(cur.username, profile.username)){
                    setFollow(true);
                }
            }
            await findMovies(profile.username);
        } catch (e) {
            await createWatchListByUser({user: profile.username, movie: []})
                .then(list => setMovies(list.movie));
        }
    }, [profile])

    return (
        <div>
            <div className="mb-1">


                <Link to={`/home`}><i
                    className="far fa-arrow-alt-circle-left fa-lg wd-imbd-yellow"> </i></Link>
                <span className="wd-profile-name ms-3">Home</span>
            </div>
            {
                cur && profile.username === cur.username
                && <div className="d-flex flex-row-reverse">
                    <button type='submit' className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right"
                            onClick={onEdit}>
                        Edit Profile
                    </button>

                </div>

            }
            {
                cur && profile.username !== cur.username
                && <div className="d-flex flex-row-reverse">
                    <button type="button" onClick={() => changeFollow(cur.username, profile.username)} className="float-end btn btn-warning rounded-pill">
                        {follow? `Unfollow`:`Follow`}
                    </button>

                </div>

            }
            <div className="row">
                <div className="col-4 col-sm-12 col-md-4">
                    <img
                        className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px pf-profile-image"
                        src={profile.profilePhoto === undefined
                             ? "https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png"
                             : `${profile.profilePhoto}`}/>
                </div>

                <div className="col-8 col-sm-0 col-md-8 d-none d-md-block">
                    <span className="wd-profile-username">{profile.username}</span>

                    <div className="wd-profile-name" style={{fontStyle: 'italic'}}>
                        {profile.firstName} {profile.lastName}
                    </div>

                    <div className="wd-profile-date" style={{fontSize: '18px'}}>
                        <i className="fas fa-birthday-cake me-2"> </i>
                        <span>Born {profile.dateOfBirth === undefined ? "2000-01-01"
                                                                      : `${profile.dateOfBirth.substring(
                                0, 10).toString()}`}</span>

                        <div style={{fontSize: '18px'}}>
                            <i className="fas fa-calendar-alt me-1"> </i>
                            IMBD member since {profile.joined.substring(0, 10).toString()}
                        </div>

                        {
                            cur && profile.username === cur.username &&
                            <div style={{fontSize: '18px'}}>
                                <i className="fas fa-envelope me-2"></i>
                                Email: {profile.email}
                            </div>
                        }
                        {
                            profile.biography !== undefined &&
                            <div style={{fontSize: '18px'}}>
                                <i className="fas fa-blog me-2"></i>
                                Biography: "{profile.biography}"
                            </div>
                        }

                    </div>


                </div>
                <ReviewList profile={profile} cur={cur}/>
                {/*<Watchlist profile={profile} cur={cur}/>*/}

                {cur && wlist.length !== 0 && cur.username === profile.username &&
                 <div className="mt-5">

                     <div className="row ">
                         <p className="wd-title wd-gold">What to watch</p>
                     </div>
                     <div className="row">
                         <Link to={'/list'} className="wd-title wd-white">From your watchlist
                             ></Link>
                     </div>
                     <section className="wd-slide-container">
                         <ul id="slide-list">
                             {
                                 wlist && wlist.map(
                                           movie => <WatchlistItem key={movie} movie={movie}/>)
                             }
                         </ul>

                     </section>

                 </div>
                }
                {cur && wlist.length === 0 && cur.username === profile.username &&
                    <WatchListPersonal/>
                }

                {
                    cur && profile.username === cur.username &&
                    <FollowList profile={profile} cur={cur}/>
                }
                {
                    cur && profile.username === cur.username &&
                    <FollowedList profile={profile} cur={cur}/>
                }

            </div>
        </div>
    )
}

export default UserProfile;