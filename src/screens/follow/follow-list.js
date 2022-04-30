import React, {useEffect, useState} from "react";
import * as service from "../../services/follow-service"
import {useNavigate, useParams} from "react-router-dom";
import FollowItem from "./follow-item";

const FollowList = ({profile, cur}) => {

    const {username} = useParams();

    const [follows, setFollows] = useState([]);

    const navigate = useNavigate();

    const findFollowingsToUser = async () =>
        // const currentUser = profile._id
        await service.findAllFollowingsOfUser(username)
            .then(followings => setFollows(followings));


    useEffect(async () => {
        try {
            await findFollowingsToUser();
        }catch (e) {
        }

    },[])

    const deleteFollowing = async (followingname) => {
        if(profile !== undefined){
            await service.deleteFollowing(username, followingname)
            await findFollowingsToUser();
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