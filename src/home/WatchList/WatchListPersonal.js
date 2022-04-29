import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";
import service from "../../services/user-service";

const WatchList = () => {
    // const {username} = useParams();
    // const navigate = useNavigate();
    // const [currentUser,setCurrentUser] = useState({});


    // useEffect(async () => {
    //     try {
    //         let user = await authService.profile();
    //         setCurrentUser(user);
    //         if(username!==user.username){
    //             user = await authService.findUser(username);
    //         }else{
    //             user = await authService.findUser(username);
    //             setCurrentUser(user);
    //         }
    //     } catch (e) {
    //         navigate('/login');
    //     }
    // }, [username]);



    // const from = undefined;
    // const arr = from || [];
    // const result1 = arr?.length;
    // console.log(result1);


    return (
        <>
            <div className="mt-5 mb-5">
                <div className="row ">
                    <p className="wd-title wd-gold">What to watch</p>
                </div>
                <div className="row">
                    <p className="wd-title wd-white">From your watchlist ></p>
                </div>
                <div className="mt-5 text-center">
                    <i className="fa fa-list wd-grey mb-3 fa-2x"/>
                    <p className="wd-white fw-bold">Your watchlist is empty</p>
                    <p className="wd-white">Save movies to keep track of what you want to watch.</p>
                    {/*<Link to={`/search/${currentUser.username}`}>*/}
                    <Link to={`/search/`}>
                        <button className="wd-browse-button">Search and add movies</button>
                    </Link>
                </div>
            </div>
        </>
    );

}
export default WatchList;