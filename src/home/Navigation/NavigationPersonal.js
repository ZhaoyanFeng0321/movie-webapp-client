import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";

const Navigation = ({logout}) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    //
    useEffect(async () => {
        try {
            let user = await authService.profile();
            setCurrentUser(user);
        } catch (e) {
            navigate('/login');
        }
    }, []);

    const signout = () => {
        authService.logout()
            .then(logout).then(navigate('/login'));
    }

    return (
        <>
            <div className="row">

                <div className="col-2 mt-2">
                    <Link to={`/home`}><i
                        className="fa fa-solid fa-film wd-film-icon"/></Link>
                </div>

                <div className="col-5 ">

                    <p className="d-none d-md-block mt-1 fw-bold fs-5 wd-gold wd-web-title">Movie
                        Reviews Web</p>


                </div>
                <div className="col-1 mt-2">
                    <Link to={`/search/`}><i
                        className="fa fa-search wd-search-icon mt-1 wd-signin"/></Link>

                </div>

                <div className="col-4 ">
                    <ul className="nav mb-2 nav-tabs wd-nav-tab-override d-flex">
                        {currentUser.accountType === "ACTOR" &&
                         <li className="nav-item d-none d-xl-block">

                             <Link to="/list" className="wd-link">
                                 <div className="nav-link">
                                     <i className="fa fa-list me-3 wd-grey"/>
                                     <span className="fw-bold">Filmography</span></div>
                             </Link>
                         </li>

                        }
                        {currentUser.accountType === "PERSONAL" &&
                         <li className="nav-item d-none d-xl-block">

                             <Link to="/list" className="wd-link">
                                 <div className="nav-link ">
                                     <i className="fa fa-list me-3 wd-grey"/>
                                     <span className="fw-bold">Watchlist</span></div>
                             </Link>
                         </li>
                        }

                        <li className="nav-item d-none d-xl-block">
                            <button type="button" onClick={signout}
                            className="nav-link wd-signin wd-white fw-bold">
                            Logout
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link to={`/profile`} className="wd-link">
                                <div className="nav-link wd-signin wd-white">
                                <span className="fw-bold ">Profile</span>
                                </div>
                            </Link>
                        </li>


                    </ul>
                </div>


            </div>
        </>
    );
}
export default Navigation;