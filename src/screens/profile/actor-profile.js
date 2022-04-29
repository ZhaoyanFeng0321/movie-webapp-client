import React from "react";
import {Link} from "react-router-dom";
import "./profile.css"
import Watchlist from "./watchlist";
import WatchlistItem from "../../home/WatchList/WatchlistItem";

const ActorProfile = ({actor, cur}) => {

    return (
        <div className="mb-4 mt-2">
            <div className="mb-1">
                <Link to={`/home/${cur.username}`}><i
                    className="far fa-arrow-alt-circle-left fa-lg wd-imbd-yellow"> </i></Link>
                <span className="wd-profile-name ms-3">Home</span>
            </div>

            <div className="row">
                <div className="col-4 col-sm-12 col-md-4">
                    <img src={actor.profilePhoto === undefined
                              ? "https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png"
                              : `${actor.profilePhoto}`} alt="avatar" height="160px"
                         className="rounded-circle"
                         style={{border: 'solid 5px #F5DE50'}}/>
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
                    <div>
                        <div className="wd-profile-date mt-2">
                            <i className="fas fa-birthday-cake me-2" style={{fontSize: '20px'}}> </i>
                            <span style={{fontSize: '20px'}}>Born {actor.dateOfBirth === undefined
                                                         ? "undefined"
                                                         : `${actor.dateOfBirth.substring(
                                    0, 10).toString()}`}</span>

                        </div>
                    </div>

                </div>
            </div>
            {/*<Watchlist profile={actor} cur={cur}/>*/}

            {actor.watchlist.length !== 0 &&
                <div className="mt-5 mb-5">

                    <div className="row">
                        <p className="wd-title wd-gold">Filmography ></p>
                    </div>
                    <section className="wd-slide-container">

                        <ul id="slide-list">
                            {
                                actor.watchlist && actor.watchlist.map(movie => <WatchlistItem key={movie} movie={movie}/>)
                            }
                        </ul>

                    </section>

                </div>
            }
        </div>
    )
}

export default ActorProfile;