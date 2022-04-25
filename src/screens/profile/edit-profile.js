import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    let[firstName, setFirstName] = useState(profile.firstName)
    let[lastName, setLastName] = useState(profile.lastName)
    let[profilePicture, setProfilePicture] = useState(profile.profilePicture)
    let[username, setUsername] = useState(profile.username)
    let[viewerId, setViewerId] = useState(profile.viewerId)
    let[password, setPassword] = useState(profile.password)
    let[dateJoined, setDateJoined] = useState(profile.dateJoined)

    const dispatch = useDispatch();

    const firstNameChangeHandler = (event) => {
        const firstName = event.target.value;
        // const newFirstName = {newFirstName: firstName};
        setFirstName(firstName);
    }

    const lastNameChangeHandler = (event) => {
        const lastName = event.target.value;
        setLastName(lastName);
    }

    // const profilePictureChangeHandler = (event) => {
    //     const profilePicture = event.target.value;
    //     setProfilePicture(profilePicture);
    // }

    const usernameChangeHandler = (event) => {
        const username = event.target.value;
        setUsername(username);
    }

    const passwordChangeHandler = (event) => {
        const password = event.target.value;
        setPassword(password);
    }

    const saveClickHandler = () => {
        const newProfile = {
            ...profile,
            firstName,
            lastName,
            profilePicture,
            username,
            viewerId,
            password,
            dateJoined,
        }
        dispatch({type:'save', profile: newProfile})
    }


    return(
        <div>
            <div className="row mb-4 mt-2">
                <div className="col-1">
                    <Link to="/profile"><i className="far fa-times-circle fa-lg wd-imbd-yellow"></i></Link>
                </div>

                <div className="col-10">
                    <span className="wd-profile-name">Edit Profile</span>
                </div>

                <div className="col-1">
                    <Link to="/profile">
                        <button className="btn btn-light rounded-pill bg-white me-2 float-end small"
                                style={{fontSize:'12px'}} onClick={saveClickHandler}>
                            <span className="fw-bold text-black">Save</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mb-2">
                <img src={profile.profilePicture} alt="avatar" height="160px" className="rounded-circle"
                     style={{border:'solid 5px #F5DE50'}}/>
            </div>

            <div className="form-floating mt-2">
                <input type="text" className="form-control bg-black text-white border" id="firstName"
                       value={firstName} name="firstName" onChange={firstNameChangeHandler}></input>
                <label htmlFor="firstName">First Name</label>
            </div>

            <div className="form-floating mt-2">
                <input type="text" className="form-control bg-black text-white border" id="lastName"
                       value={lastName} name="lastName" onChange={lastNameChangeHandler}></input>
                <label htmlFor="lastName">Last Name</label>
            </div>

            <div className="form-floating mt-2">
                <input type="text" className="form-control bg-black text-white border" id="lastName"
                       value={username} name="username" onChange={usernameChangeHandler}></input>
                <label htmlFor="username">User Name</label>
            </div>

            <div className="form-floating mt-2">
                <input type="text" className="form-control bg-black text-white border" id="lastName"
                       value={password} name="password" onChange={passwordChangeHandler}></input>
                <label htmlFor="password">Password</label>
            </div>

        </div>

    )
}

export default EditProfile;