import {React, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Profile from "./index";
import EditProfile from "./edit-profile";
import * as authService from "../../services/auth-service";
import {useParams} from "react-router-dom";

const ProfileScreen = () => {
    //const profile = useSelector((store) => store.profile);
    const [editing, setEditing] = useState(false);
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
                    setProfile(user);
                } else {
                    setProfile(curUser);
                }
            } else {
                setProfile(curUser);
            }
        } catch (e) {
            setCurrentUser(undefined);
            let user = await authService.findUser(username);
            setProfile(user);
            //navigate(`/profile/${username}`);
        }
    }, [profile]);

    return (
        <>
            {
                !editing ?
                (<Profile profile={profile} currentUser={currentUser} onEdit={() => setEditing(true)} />) :
                (<EditProfile toUpdate={profile} leaveEdit={() => setEditing(false)} />)
            }
        </>
    );

};

export default ProfileScreen;