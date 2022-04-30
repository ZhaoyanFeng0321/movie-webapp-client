import React, {useEffect, useState} from "react";
import * as service from "../../services/follow-service"
import {useNavigate, useParams} from "react-router-dom";
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
        } catch (e) {
        }

    }, [])

    return (
        <>
            <div className="row mt-5">
                <p className="wd-title wd-gold">Followed By</p>
            </div>
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