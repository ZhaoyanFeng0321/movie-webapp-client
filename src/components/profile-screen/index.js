import React, {useEffect, useState} from "react";
import {
    HashRouter,
    Link,
    Route,
    Routes,
    useNavigate,
    useLocation,
    useParams
} from "react-router-dom";
import * as authService from "../../services/auth-service"
import UserProfile from "../profile-screen/ProfileComponent";
import ActorProfile from "../profile-screen/ActorProfile";
import ReviewList from "../../screens/profile/reviewlist";

const Profile = () => {
    const {username} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [profile, setProfile] = useState({});
    const [currentUser,setCurrentUser] = useState({});

    useEffect(async () => {
        try {
            let user = await authService.profile();
            setCurrentUser(user);
            if(username!==user.username){
                user = await authService.findUser(username);
            }else{
                user = await authService.findUser(username);
                setCurrentUser(user);
            }
            setProfile(user);
        } catch (e) {
            navigate('/login');
        }
    }, [username]);

    /**
     * Current user logout
     */
    const logout = () => {
        authService.logout()
            .then(() => navigate('/login'));
    }

    return(
        <div>
            {
                profile.username === currentUser.username
                &&<div>
                    <Link to={`/profile/${profile.username}/edit`}
                          className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                        Edit profile
                    </Link>
                    <button type="button" onClick={logout} className="mt-2 float-end btn btn-warning rounded-pill">
                        Logout
                    </button>
                </div>

            }
            {
                profile.accountType === "PERSONAL"  &&
                <UserProfile profile={profile}/> &&
                <ReviewList/>
                // <br/>
                // <Watchlist/>
            }
            {
                profile.accountType === "ACTOR"  &&
                <ActorProfile actor={profile}/>
            }


        </div>
        // </Provider>
    )
}
export default Profile;