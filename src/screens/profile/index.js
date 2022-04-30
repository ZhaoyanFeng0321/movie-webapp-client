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
import UserProfile from "./user-profile";
import ActorProfile from "./actor-profile";
import ReviewList from "./reviewlist";
import AdminProfile from "./admin-profile";
import * as followService from "../../services/follow-service"
import {followUser} from "../../services/follow-service";

const Profile = () => {
    const {username} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [profile, setProfile] = useState({});
    const [currentUser,setCurrentUser] = useState({});

    const deleteMovieForUser = async (mid) => {
        const newUser =  authService.removeMovieFromList(profile._id, mid)
        await setProfile(newUser);
        return newUser;
    }

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

    const FollowUser = async (username, followname) => {
        await followService.followUser(username, followname)
    }

    return(
        <div>
            <div className='position-relative pe-15'>
                {
                    profile.username === currentUser.username
                    &&<div className='d-flex flex-row-reverse'>
                        <div className='p-2'>
                            <Link to={`/profile/${profile.username}/edit`}
                                  className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                                Edit profile
                            </Link>
                        </div>
                        <div className='p-2'>
                            <button type="button" onClick={logout} className="mt-2 float-end btn btn-warning rounded-pill">
                                Logout
                            </button>
                        </div>
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
            </div>

            {
                profile.accountType === "PERSONAL"  &&
                <UserProfile profile={profile} cur={currentUser} deleteMovieForUser={deleteMovieForUser}/>
                // <ReviewList/> &&
                // <br/> &&
                // <Watchlist/>
            }
            {
                profile.accountType === "ACTOR"  &&
                <ActorProfile actor={profile} cur={currentUser}/>
            }
            {
                profile.accountType === "ADMIN" &&
                <AdminProfile profile={profile} cur={currentUser}/>
            }

        </div>
        // </Provider>
    )
}
export default Profile;