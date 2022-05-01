import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./profile.css"

const AdminProfile = ({profile,cur,onEdit}) => {

    return(
        <div className="mb-4 mt-2">
            <div className="mb-1">

                <Link to={`/home`}><i className="far fa-arrow-alt-circle-left fa-lg wd-imbd-yellow"> </i></Link>
                <span className="wd-profile-name ms-3">Home</span>
            </div>
            {
                cur && profile.username === cur.username
                && <div className="d-flex flex-row-reverse">
                    <button type='submit' className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right"
                            onClick={onEdit}>
                        Edit Profile
                    </button>

                </div>

            }
            <div className="row">
                <div className="col-4 col-sm-12 col-md-4">
                    <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px pf-profile-image"
                         src={profile.profilePhoto === undefined
                              ? "https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png"
                              : `${profile.profilePhoto}`}/>
                </div>

                <div className="col-8 col-sm-0 col-md-8 d-sm-none d-md-block">
                    <span className="wd-profile-username">{profile.username}</span>
                    <i className="fas fa-user-cog ms-2" style={{fontSize: '18px', color:'#F5DE50'}}></i>

                    <div className="wd-profile-name" style={{fontStyle:'italic'}}>
                        {profile.firstName} {profile.lastName}
                    </div>

                    <div className="wd-profile-date" style={{fontSize: '18px'}}>
                        <i className="fas fa-birthday-cake me-2"> </i>
                        <span>Born {profile.dateOfBirth === undefined ? "2000-01-01" :`${profile.dateOfBirth.substring(0, 10).toString()}`}</span>

                        <div style={{fontSize: '18px'}}>
                            <i className="fas fa-calendar-alt me-2"> </i>
                            Work for IMBD since {profile.joined.substring(0, 10).toString()}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminProfile;