import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";
import HomePersonal from "./HomePersonal";
import HomeActor from "./HomeActor";

const Home = () => {
    const {username} = useParams();
    const navigate = useNavigate();
    const [currentUser,setCurrentUser] = useState({});
    const [profile, setProfile] = useState({});
    useEffect(async () => {
        try {
            let user = await authService.profile();
            setCurrentUser(user.user);
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


    return(
        <>
            {profile.accountType === "PERSONAL" && <HomePersonal/>}
            {profile.accountType === "ACTOR" && <HomeActor/>}
        </>


    )
}
export default Home;