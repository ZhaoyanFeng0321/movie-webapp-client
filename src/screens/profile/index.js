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
import * as followService from "../../services/follow-service"

const Profile = ({onEdit}) => {
    const [profile, setProfile] = useState({});
    const {username} = useParams();
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(async () => {
        try {
            let curUser = await authService.profile();
            setCurrentUser(curUser);
            if(username) {
                let user = await authService.findUser(username);
                if (username !== curUser.username) {
                    curUser = user;
                }
            }
            setProfile(curUser);

        } catch (e) {
            setCurrentUser(undefined);
            let user = await authService.findUser(username);
            setProfile(user);
            //navigate(`/profile/${username}`);
        }
    }, [username]);

    const FollowUser = async (username, followname) => {
        await followService.followUser(username, followname)
    }

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
                currentUser && profile.username !== currentUser.username
                && <div>
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