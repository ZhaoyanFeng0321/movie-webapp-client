import {Link} from "react-router-dom";

const Navigation = () =>{

    return(
        <>
            <div className="row mb-5">

                <div className="col-2 mt-2">
                    <Link to="/home"><i className="fa fa-solid fa-film wd-film-icon"/></Link>
                </div>

                <div className="col-5 ">

                        <p className="d-none d-md-block mt-1 fw-bold fs-5 wd-gold">Movie Reviews Web</p>


                </div>
                <div className="col-1 mt-2">
                    <Link to="/search/"><i className="fa fa-search wd-search-icon mt-1"/></Link>

                </div>

                <div className="col-4 ">
                    <ul className="nav mb-2 nav-tabs wd-nav-tab-override">
                        <li className="nav-item d-sm-none d-md-none d-lg-block d-none">

                            <Link to="/watchlist" className="wd-link">
                                <div className="nav-link ">
                                <i className="fa fa-list me-3 wd-grey"/>
                                <span className="fw-bold">Watchlist</span></div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="wd-link">
                            <div className="nav-link">
                                <span className="fw-bold">Sign in</span>
                            </div></Link>
                        </li>


                    </ul>
                </div>


            </div>
        </>
    );
}
export default Navigation;