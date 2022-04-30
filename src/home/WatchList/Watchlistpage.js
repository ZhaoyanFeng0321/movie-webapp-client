import React, {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";
import Navigation from "../Navigation/Navigation";
import NavigationPersonal from "../Navigation/NavigationPersonal";

import Watchlist from "../../screens/profile/watchlist";
import WatchlistDetail from "./WatchListDetail";

const WatchListPage = () => {
    const [login,setLogin] =useState(false);
    const[currentUser, setCurrentUser] = useState({});

    useEffect(async () => {
        try {
            let user = await authService.profile();
            setCurrentUser(user);
            setLogin(true);
        }catch(e){}
    },[])



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
                   <NavigationPersonal/>
                   <WatchlistDetail profile={currentUser}/>
               </div>





       </>
    );
}
export default WatchListPage;