import React, {useEffect, useState} from "react";
import * as service from "../../services/follow-service"
import {useNavigate, useParams} from "react-router-dom";
import FollowedItem from "./followed-item";

const FollowedList = ({profile, cur}) => {

    const [follows, setFollows] = useState([]);

    const navigate = useNavigate();

    const findFollowersOfUser = async () =>
        await service.findAllFollowedUser(profile.username)
            .then(followings => setFollows(followings));

    useEffect(async () => {
        try {
            await findFollowersOfUser();
        } catch (e) {
        }

    }, [])

    // const followNewUser = async (followingname) => {
    //     if(profile !== undefined){
    //         await service.followUser(profile.username, followingname)
    //         await findFollowersOfUser();
    //     }else{
    //         alert("Please log in!");
    //         navigate('/login');
    //     }
    // }

    return (
        <>
            <div className="row mt-5">
                <p className="wd-title wd-gold">Followers</p>
            </div>
            <ul className="list-group mb-5">
                {
                    follows && follows.map(following =>
                                               <FollowedItem key={following._id}
                                                             following={following}
                                                             profile={profile}
                                                             cur={cur}/>)
                }
            </ul>
        </>
    )
}

export default FollowedList;