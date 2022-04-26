import React  from "react";
import {Link} from "react-router-dom";
import "./profile.css"

const ActorProfile = ({actor}) => {

    return(
        <div className="mb-4 mt-2">
            <div className="mb-1">
                <Link to={`/home/${actor.username}`}><i className="far fa-arrow-alt-circle-left fa-lg wd-imbd-yellow"> </i></Link>
                <span className="wd-profile-name ms-3">{actor.firstName} {actor.lastName}</span>
            </div>

            <div className="row">
                <div className="col-4">
                    <img src={actor.profilePicture} alt="avatar" height="160px" className="rounded-circle"
                         style={{border:'solid 5px #F5DE50'}}/>
                </div>

                <div className="col-8">
                    <span className="wd-profile-username">{actor.firstName} {actor.lastName}</span>

                    <div className="wd-profile-date">
                        <i className="fas fa-calendar-alt me-2"></i>
                        Birthday: {actor.dateOfBirth}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ActorProfile;