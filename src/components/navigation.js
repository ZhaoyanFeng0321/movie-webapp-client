import {BrowserRouter,Link} from "react-router-dom"

const Nav = ()=> {
    return (
        <div className="list-group">

            <Link to="/search" className="list-group-item">Search</Link>
            <Link to="/details" className="list-group-item">Details</Link>
            {/*<Link to="/signup" className="list-group-item">Signup</Link>*/}
            {/*<Link to="/signin" className="list-group-item">Signin</Link>*/}
            {/*<Link to="/profile" className="list-group-item">Profile</Link>*/}
            <br/>
        </div>

    );
};

export default Nav;