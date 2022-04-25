import React from "react";
import {Link} from "react-router-dom";
import "./profile.css"

const UserProfile = ({profile}) => {
    return(
        <div className="mb-4 mt-2">
            <div className="mb-1">
                <Link to="/home"><i className="far fa-arrow-alt-circle-left fa-lg wd-imbd-yellow"> </i></Link>
                <span className="wd-profile-name ms-3">{profile.username}</span>
            </div>

            <div className="row">
                <div className="col-4">
                    <img src={profile.profilePicture} alt="avatar" height="160px" className="rounded-circle"
                         style={{border:'solid 5px #F5DE50'}}/>
                </div>

                <div className="col-8">
                    <span className="wd-profile-username">{profile.username}</span>

                    <div className="wd-profile-name" style={{fontStyle:'italic'}}>
                        {profile.firstName} {profile.lastName}
                    </div>

                    <div className="wd-profile-date">
                        <i className="fas fa-calendar-alt me-2"> </i>
                        IMBD member since {profile.joined}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserProfile;