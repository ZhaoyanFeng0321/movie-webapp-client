import {useNavigate, Outlet, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as authService from "./services/auth-service";
import Home from "./home/HomeScreen";
import Navigation from "./home/Navigation/Navigation";
import NavigationPersonal from "./home/Navigation/NavigationPersonal";

const MovieApp = () => {
    const {username} = useParams();
    const navigate = useNavigate();
    const [log, setLog] = useState(false);
    const [currentUser,setCurrentUser] = useState({});
    const [profile, setProfile] = useState({});
    useEffect(async () => {
        try {
            let user = await authService.profile();
            setCurrentUser(user.user);
            setLog(true);
            if(username!==user.username){
                user = await authService.findUser(username);
            }else{
                user = await authService.findUser(username);
                setCurrentUser(user);
            }
            setProfile(user);
        } catch (e) {
            //navigate('/');
        }
    }, [username]);


    return(
        <>
            {!log && <Navigation/>}
            {log && <NavigationPersonal/>}
           <Outlet />

        </>


    )
}
export default MovieApp;
