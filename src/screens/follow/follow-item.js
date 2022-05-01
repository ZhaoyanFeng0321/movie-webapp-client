import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import service from "../../services/review-service";
import axios from "axios";
import authService from "../../services/auth-service"
import {Link} from "react-router-dom";
import userService from "../../services/user-service";

const FollowItem = ({following, deleteFollowing, profile, cur}) => {

    return (
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">
                    <div className="col">

                        <button type="button"
                                onClick={() => deleteFollowing(following.userFollowed)}
                                className="float-end btn btn-warning rounded-pill">
                            Unfollow
                        </button>


                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>
                            <Link to={`/profile/${following.userFollowed}`}>
                                {following.userFollowed}
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FollowItem;