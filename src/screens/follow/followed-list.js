import React, {useEffect, useState} from "react";
import * as service from "../../services/follow-service"
import {useNavigate, useParams} from "react-router-dom";
import FollowItem from "./follow-item";
import FollowedItem from "./followed-item";

const FollowedList = ({profile, cur}) => {

    // const {username} = useParams();

    const [follows, setFollows] = useState([]);

    const navigate = useNavigate();

    const findFollowersOfUser = async () =>
        // const currentUser = profile._id
        await service.findAllFollowedUser(profile.username)
            .then(followings => setFollows(followings));


    useEffect(async () => {
        try {
            await findFollowersOfUser();
        }catch (e) {
        }

    },[])

    // const deleteFollowing = async (followingname) => {
    //     if(profile !== undefined){
    //         await service.deleteFollowing(username, followingname)
    //         await findFollowersOfUser();
    //     }else{
    //         alert("Please log in!");
    //         navigate('/login');
    //     }
    // }

    return(
        <>
            <h3 style={{marginTop:'10px', color:'#F5DE50'}}>Followed By</h3>
            <ul className="list-group">
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