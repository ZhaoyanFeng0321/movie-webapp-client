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

    return (
        <>
            <div className="row mt-5">
                <p className="wd-title wd-gold">Followers</p>
                {follows.length===0 &&
                 <p className="row mt-5">You don't have follower.</p>
                }
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