import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";

const Navigation = () =>{

    const {username} = useParams();
    const navigate = useNavigate();
    const [currentUser,setCurrentUser] = useState({});

    useEffect(async () => {
        try {
            let user = await authService.profile();
            setCurrentUser(user);
            if(username!==user.username){
                user = await authService.findUser(username);
            }else{
                user = await authService.findUser(username);
                setCurrentUser(user);
            }
        } catch (e) {
            navigate('/login');
        }
    }, [username]);


    return(
        <>
            <div className="row mb-5">

                <div className="col-2 mt-2">
                    <Link to={`/home/${currentUser.username}`}><i className="fa fa-solid fa-film wd-film-icon"/></Link>
                </div>

                <div className="col-5 ">

                        <p className="d-none d-md-block mt-1 fw-bold fs-5 wd-gold wd-web-title">Movie Reviews Web</p>


                </div>
                <div className="col-1 mt-2">
                    <Link to={`/search/${currentUser.username}`}><i className="fa fa-search wd-search-icon mt-1 wd-signin"/></Link>

                </div>

                <div className="col-4 ">
                    {/*<ul className="nav mb-2 nav-tabs wd-nav-tab-override">*/}
                        {/*<li className="nav-item d-sm-none d-md-none d-lg-block d-none">*/}

                        {/*    <Link to="/watchlist" className="wd-link">*/}
                        {/*        <div className="nav-link ">*/}
                        {/*        <i className="fa fa-list me-3 wd-grey"/>*/}
                        {/*        <span className="fw-bold">Watchlist</span></div></Link>*/}
                        {/*</li>*/}


                    <div className="nav-item">
                        <Link to={`/profile/${currentUser.username}`} className="wd-link">
                            <div className="nav-link wd-signin wd-white">
                                <span className="fw-bold ">Profile</span>
                            </div></Link>
                    </div>



                    {/*</ul>*/}
                </div>


            </div>
        </>
    );
}
export default Navigation;