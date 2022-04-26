import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";

const Home = () => {
    const {username} = useParams();
    const navigate = useNavigate();
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
        } catch (e) {
            navigate('/login');
        }
    }, [username]);



}
