import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import "./profile.css"
import axios from "axios";

const ActorProfile = ({actor}) => {
    // const actor = useSelector(state => state.actor);
    // const [actor, setActor] = useState({})
    // const {uid} = useParams()
    // const findActorByUserID = async () => {
    //     const response = await axios.get(`http://localhost:4000/api/${uid}`)
    //     setActor(response.data)
    // }
    //
    // useEffect(() => {
    //     findActorByUserID()
    // }, [])

    return(
        <div className="mb-4 mt-2">
            <div className="mb-1">
                <Link to="/detail"><i className="far fa-arrow-alt-circle-left fa-lg wd-imbd-yellow"></i></Link>
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
                        Joined IMBD: {actor.joined}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ActorProfile;