import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import "./profile.css"
import * as service from "../../services/auth-service"
import * as reviewService from "../../services/review-service"
import ReviewList from "./reviewlist";
import Watchlist from "./watchlist";
import * as authService from "../../services/auth-service";
import FollowList from "../follow/follow-list";
import FollowedList from "../follow/followed-list";

const UserProfile = ({profile,cur}) => {

    return(
        <div className="mb-4 mt-2">
            <div className="mb-1">

                <Link to={`/home/${cur.username}`}><i className="far fa-arrow-alt-circle-left fa-lg wd-imbd-yellow"> </i></Link>
                <span className="wd-profile-name ms-3">Home</span>
            </div>

            <div className="row">
                <div className="col-4 col-sm-12 col-lg-4">
                    <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px pf-profile-image"
                         src={profile.profilePhoto === undefined
                              ? "https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png"
                              : `${profile.profilePhoto}`}/>
                    {/*<img src={`${profile.profilePicture}`} alt="avatar" height="160px" className="rounded-circle"*/}
                    {/*     style={{border:'solid 5px #F5DE50'}}/>*/}
                </div>

                <div className="col-8 col-sm-0 col-lg-8 d-none d-lg-block">
                    <span className="wd-profile-username">{profile.username}</span>

                    <div className="wd-profile-name" style={{fontStyle:'italic'}}>
                        {profile.firstName} {profile.lastName}
                    </div>

                    <div className="wd-profile-date" style={{fontSize: '18px'}}>
                        <i className="fas fa-birthday-cake me-2" > </i>
                        <span>Born {profile.dateOfBirth === undefined ? "2000-01-01" :`${profile.dateOfBirth.substring(0, 10).toString()}`}</span>

                        <div style={{fontSize: '18px'}}>
                            <i className="fas fa-calendar-alt me-2"> </i>
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
                {
                    cur && profile.username === cur.username &&
                    <FollowList profile={profile} cur={cur}/>
                }
                {
                    cur && profile.username === cur.username &&
                    <FollowedList profile={profile} cur={cur}/>
                }
                {
                    cur && profile.username === cur.username &&
                    <Watchlist profile={profile} cur={cur}/>
                }

        </div>
        </div>
    )
}

export default UserProfile;