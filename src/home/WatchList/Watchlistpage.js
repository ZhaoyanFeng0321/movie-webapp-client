import React, {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";
import Navigation from "../Navigation/Navigation";
import NavigationPersonal from "../Navigation/NavigationPersonal";

import Watchlist from "../../screens/profile/watchlist";
import WatchlistDetail from "./WatchListDetail";
import {useParams} from "react-router-dom";

const WatchListPage = () => {
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
    }, []);



    return(
       <>
           {/*{!login &&<p>Please log in!</p> &&*/}
           {/*    <div className="row mt-3 ms-5 me-5">*/}
           {/*        <Navigation/>*/}
           {/*    </div>}*/}

               {/*{login &&<p>login successfully! </p> &&*/}
               {/*<div className="row mt-3 ms-5 me-5">*/}
               {/*    <NavigationPersonal/>*/}
               {/*</div>}*/}



               <div className="row mt-3 ms-5 me-5">
                   {/*<NavigationPersonal/>*/}
                   <Watchlist profile={profile} cur={currentUser}/>
               </div>





       </>
    );
}
export default WatchListPage;