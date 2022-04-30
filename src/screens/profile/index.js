import React, {useEffect, useState} from "react";
import {
    HashRouter,
    Link,
    Route,
    Routes,
    useNavigate,
    useParams
} from "react-router-dom";
import * as authService from "../../services/auth-service"
import UserProfile from "./user-profile";
import ActorProfile from "./actor-profile";
import AdminProfile from "./admin-profile";

const Profile = ({profile, currentUser, onEdit}) => {
    return (
        <div>
            {
                currentUser && profile.username === currentUser.username
                && <div>
                    <button type='submit' className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right"
                            onClick={onEdit}>
                        Edit Profile
                    </button>

                </div>

            }
            {
                profile.username !== currentUser.username &&
                <div className='d-flex flex-row-reverse'>
                    <button type="button" onClick={() => FollowUser(currentUser.username, profile.username)} className="mt-2 float-end btn btn-warning rounded-pill">
                        Follow
                    </button>
                </div>
            }

            {
                profile.accountType === "PERSONAL" &&
                <UserProfile profile={profile} cur={currentUser}/>
            }
            {
                profile.accountType === "ACTOR" &&
                <ActorProfile actor={profile} cur={currentUser}/>
            }
            {
                profile.accountType === "ADMIN" &&
                <AdminProfile profile={profile} cur={currentUser}/>
            }

        </div>
    )
}
export default Profile;