import React, {useEffect, useState} from "react";
import * as service from "../../services/follow-service"
import {useNavigate, useParams} from "react-router-dom";
import FollowItem from "./follow-item";

const FollowList = ({profile, cur}) => {

    // const {username} = useParams();

    const [follows, setFollows] = useState([]);

    const navigate = useNavigate();

    const findFollowingsOfUser = async () =>
        // const currentUser = profile._id
        await service.findAllFollowingsOfUser(profile.username)
            .then(followings => setFollows(followings));


    useEffect(async () => {
        try {
            await findFollowingsOfUser();
        }catch (e) {
        }

    },[])

    const deleteFollowing = async (followingname) => {
        if(profile !== undefined){
            await service.deleteFollowing(profile.username, followingname)
            await findFollowingsOfUser();
        }else{
            alert("Please log in!");
            navigate('/login');
        }
    }

    // console.log(user)
    // console.log(reviews)

    return(
        <>
            <h3 style={{marginTop:'10px', color:'#F5DE50'}}>Followings</h3>
            <ul className="list-group">
                {
                    follows && follows.map(following =>
                                               <FollowItem key={following._id}
                                                           following={following}
                                                           deleteFollowing={deleteFollowing}
                                                           profile={profile}
                                                           cur={cur}/>)
                }
            </ul>
        </>
    )
}

export default FollowList;