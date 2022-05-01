import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

const FollowedItem = ({following, profile, cur}) => {

    return (
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">
                    <div className="col">

                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>
                            <Link to={`/profile/${following.userFollowing}`}>
                                {following.userFollowing}
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FollowedItem;