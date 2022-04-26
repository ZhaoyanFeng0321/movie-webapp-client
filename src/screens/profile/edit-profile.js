import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as authService from "../../services/auth-service";

const EditProfile = () => {
    const [profile, setProfile] = useState({});
    const [updateUser, setUpdateUser] = useState({});
    const navigate = useNavigate();


    /**
     * Handle the file and store it to server
     * @param file
     * @returns {Promise<unknown>} the store address of file of error information
     */
    const imageData = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    /**
     * Update the user's profile photo from local image
     * @param event
     * @returns {Promise<void>}
     */
    const handleProfilePhoto = async (event) => {
        const file = event.target.files[0]
        const img = await imageData(file)
        setUpdateUser({
                          ...updateUser,
                          profilePhoto: img
                      })
    }

    useEffect(async () => {
        try {
            let user = await authService.profile();
            setProfile(user);
            setUpdateUser(user);
        } catch (e) {
        }
    }, []);

    /**
     * Update user information
     */
    const saveProfile = () => {
        authService.update(updateUser)
            .then(() => navigate(`/profile/${profile.username}`))
            .catch(e => alert(e));
    }

    return (
        <div className="ttr-edit-profile">
            <div className="border border-bottom-0">
                <Link to={`/profile/${profile.username}`}
                      className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                    <i className="fa fa-close"></i>
                </Link>
                <button className="btn btn-dark rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2"
                        onClick={
                            saveProfile}>
                    Save
                </button>
                <h4 className="p-2 mb-0 pb-0 fw-bolder">Edit profile</h4>
                <div className="mb-5 position-relative">
                    <div className="bottom-0 left-0 position-relative">
                        <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px pf-profile-image"
                            src={profile.profilePhoto === undefined
                                 ? "https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png"
                                 : `${profile.profilePhoto}`}/>
                    </div>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="username">Username</label>
                    <input id="username" title="Username" readOnly
                           className="p-0 form-control border-0"
                           value={`${profile.username}`}/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="first-name">First name</label>
                    <input id="first-name"
                           className="p-0 form-control border-0"
                           defaultValue={profile.firstName === undefined ? ``
                                                                         : `${updateUser.firstName}`}
                           onChange={(e) =>
                               setUpdateUser({...updateUser, firstName: e.target.value})}
                    />
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="last-name">Last name</label>
                    <input id="last-name"
                           className="p-0 form-control border-0"
                           defaultValue={profile.lastName === undefined ? ``
                                                                        : `${profile.lastName}`}
                        //placeholder={`${profile.lastName}`}
                           onChange={(e) =>
                               setUpdateUser({...updateUser, lastName: e.target.value})}
                    />
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        className="p-0 form-control border-0" id="bio"
                        onChange={(e) =>
                            setUpdateUser({...updateUser, biography: e.target.value})}
                        defaultValue={profile.biography === undefined ? ``
                                                                      : `${profile.biography}`}>
              </textarea>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="date-of-birth">Date of birth</label>
                    <input id="date-of-birth"
                           className="p-0 form-control border-0"
                           defaultValue={profile.dateOfBirth === undefined ? "1998-09-28" : `${profile.dateOfBirth.substring(0, 10)}`}
                           onChange={(e) =>
                               setUpdateUser({...updateUser, dateOfBirth: e.target.value})}
                           type="date"
                           required="required"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="email">Email</label>
                    <input id="email" placeholder={`${profile.email}`}
                           className="p-0 form-control border-0"
                           type="email"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="password">Reset password</label>
                    <input id="password"
                           className="p-0 form-control border-0"
                           type="password"
                           onChange={(e) =>
                               setUpdateUser({...updateUser,password: e.target.value})}/>
                </div>

                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="photo">Profile photo</label>
                    <input id="photo"
                           className="p-0 form-control border-0"
                           onChange={e => handleProfilePhoto(e)}
                           type="file" name="myImage" accept="image/png, image/jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default EditProfile;