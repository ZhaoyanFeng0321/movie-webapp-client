import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active='home'}) => {
    return(
            <div className="list-group">

                <Link to="/home" className="list-group-item col-12">
                    <i className= "fa-solid fa-house-chimney"></i> Home
                </Link>

                <Link to="/movie/details" className="list-group-item col-12">
                    <i className="fa-solid fa-film"></i> Movie Details
                </Link>

                <Link to="/review" className="list-group-item col-12">
                    <i className="fa-solid fa-comment"></i> Review
                </Link>

                <Link to="/profile" className="list-group-item col-12">
                    <i className= "fa-solid fa-user"></i> Profile
                </Link>



                


            <Link to ="/#"
                   className="btn btn-primary btn-block rounded-pill mt-3">
                    Sign Out</Link>
            </div>
    );
}




export default NavigationSidebar;

