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
        }
    }, [username]);


    return (
        <div>

            {
                profile.accountType === "PERSONAL" &&
                <UserProfile profile={profile} cur={currentUser} onEdit={onEdit}/>
            }
            {
                profile.accountType === "ACTOR" &&
                <ActorProfile actor={profile} cur={currentUser} onEdit={onEdit}/>
            }
            {
                profile.accountType === "ADMIN" &&
                <AdminProfile profile={profile} cur={currentUser} onEdit={onEdit}/>
            }

        </div>
    )
}
export default Profile;