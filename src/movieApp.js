import {useNavigate, Outlet, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as authService from "./services/auth-service";
import Navigation from "./home/Navigation/Navigation";
import NavigationPersonal from "./home/Navigation/NavigationPersonal";


const MovieApp = () => {
    const navigate = useNavigate();
    const [log, setLog] = useState(false);

    useEffect(async () => {
        try {
            let user = await authService.profile();
            setLog(true);
        } catch (e) {
            //navigate('/');
        }
    }, [log]);

    return (
        <>
                {!log? (<Navigation signin={() => setLog(true)}/>):
                 (<NavigationPersonal logout={() => setLog(false)}/>)}
                <Outlet/>
        </>

    )
}
export default MovieApp;