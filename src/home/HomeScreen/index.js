import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";
import HomePersonal from "./HomePersonal";
import HomeActor from "./HomeActor";
import HomeAdmin from "./HomeAdmin";
import HomeScreen from "./HomeScreen";

const Home = () => {
    //const {username} = useParams();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [profile, setProfile] = useState({});
    useEffect(async () => {
        try {
            let user = await authService.profile();
            setCurrentUser(user);
            setProfile(user);
        } catch (e) {
            setCurrentUser(undefined);
            setProfile(undefined);
            //navigate('/login');
        }
    }, []);

    return (
        <>
            {!profile && <HomeScreen/>}
            {profile&& profile.accountType === "PERSONAL" && <HomePersonal profile={profile}
                                                                 cur={currentUser.username}/>}
            {profile&&profile.accountType === "ACTOR" && <HomeActor profile={profile}
                                                           cur={currentUser.username}/>}
            {profile&&profile.accountType === "ADMIN" && <HomeAdmin profile={profile}
                                                           cur={currentUser.username}/>}
        </>

    )
}
export default Home;
