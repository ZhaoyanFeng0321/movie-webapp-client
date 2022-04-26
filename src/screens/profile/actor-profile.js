import React  from "react";
import {Link} from "react-router-dom";
import "./profile.css"

const ActorProfile = ({actor}) => {

    return(
        <div className="mb-4 mt-2">
            <div className="mb-1">
                <Link to="/detail"><i className="far fa-arrow-alt-circle-left fa-lg wd-imbd-yellow"> </i></Link>
                <div><span className="wd-profile-name ms-3">{actor.username}</span></div>
                <div><span className="wd-profile-name ms-3">{actor.firstName} {actor.lastName}</span>
                    <span className="fa-stack" style={{"fontSize": "0.5em"}}>
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span></div>

            </div>

            <div className="row">
                <div className="col-4">
                    <img src={actor.profilePicture} alt="avatar" height="160px" className="rounded-circle"
                         style={{border:'solid 5px #F5DE50'}}/>
                </div>

                <div className="col-8">
                    <span className="wd-profile-username">{actor.firstName} {actor.lastName}</span>

                    <div className="wd-profile-date">
                        <i className="fas fa-birthday-cake me-1"> </i>
                        <span className="me-3">Born {actor.dateOfBirth === undefined ? "2000-01-01" :`${actor.dateOfBirth.substring(0, 10).toString()}`}</span>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ActorProfile;