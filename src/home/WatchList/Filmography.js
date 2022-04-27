import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";

const WatchList = () => {
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

    return (
        <>
            <div className="mt-5 mb-5">

                <div className="row">
                    <Link to="/watchlist" className="wd-title wd-gold">Your Filmography ></Link>
                </div>
                <div className="mt-5 text-center">
                    <i className="fa fa-list wd-grey mb-3 fa-2x"/>
                    <p className="wd-white fw-bold">Your filmography is empty</p>
                    <p className="wd-white">Save movies to keep track of what you have acted.</p>
                    <Link to={`/search/${currentUser.username}`}>
                        <button className="wd-browse-button">Search and add movies</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default WatchList;