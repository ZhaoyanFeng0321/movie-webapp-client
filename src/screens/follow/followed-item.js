import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import service from "../../services/review-service";
import axios from "axios";
import authService from "../../services/auth-service"
import {Link} from "react-router-dom";
import userService from "../../services/user-service";

const FollowedItem = ({following, profile, cur}) => {

    // const [user, setUser] = useState([])
    // const findUserByUsername = async (username) => {
    //
    //     await userService.findUserByUsername(username);
    //
    //
    // }
    //
    // useEffect = async ()=>{
    //     await findUserByUsername(following.userFollowed).then(us=>setUser(us));
    //     console.log(following)
    // }

    return (
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">
                    <div className="col">
                    {/*<div className="col-2 col-sm-0 col-md-2 d-none d-md-block">*/}
                    {/*    /!*<img src={user.profilePhoto} alt="poster" width="120px"/>*!/*/}
                    {/*</div>*/}
                    {/*<div className="col-10 col-sm-12 col-md-10">*/}

                        {/*{*/}
                        {/*    profile.username === cur.username &&*/}
                        {/*    <i className="fas fa-times-circle float-end"*/}
                        {/*       style={{color:'#F5DE50'}}*/}
                        {/*       onClick={() => deleteFollowing(following.userFollowed)}></i>*/}
                        {/*}*/}

                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>
                            <Link to={`/profile/${following.userFollowing}`}>
                                {following.userFollowing}
                            </Link>
                        </div>
                        {/*<i className="fas fa-star" style={{color:'#F5DE50'}}></i> {review.rating}/10*/}
                        {/*<br/>*/}
                        {/*<div style={{fontSize: 'small', color: 'lightgray', marginBottom: '5px'}}>Posted On: {review.postedOn}</div>*/}

                        {/*<div style={{fontStyle: 'italic'}}>"{review.review}"</div>*/}
                    </div>

                </div>

            </div>
        </>
    )
}

export default FollowedItem;