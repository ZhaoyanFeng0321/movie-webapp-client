import {React, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Profile from "./index";
import EditProfile from "./edit-profile";
import * as authService from "../../services/auth-service";
import {useParams} from "react-router-dom";

const ProfileScreen = () => {
    //const profile = useSelector((store) => store.profile);
    const [editing, setEditing] = useState(false);

    return (
        <>
            {
                !editing ?
                (<Profile onEdit={() => setEditing(true)} />) :
                (<EditProfile leaveEdit={() => setEditing(false)} />)
            }
        </>
    );

};

export default ProfileScreen;