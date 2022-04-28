import {Link} from "react-router-dom";
const WatchList = () => {
    return (
        <>
            <div className="mt-5 mb-5">
                <div className="row ">
                    <p className="wd-title wd-gold">What to watch</p>
                </div>
                <div className="row">
                    <p className="wd-title wd-white">From your watchlist ></p>
                </div>
                <div className="mt-5 text-center">
                    <i className="fa fa-list wd-grey mb-3 fa-2x"/>
                    <p className="wd-white fw-bold">Sign in to access your Watchlist</p>
                    <p className="wd-white">Save shows and movies to keep track of what you want to watch.</p>
                    <Link to="/login">
                        <button className="wd-bg-button">Sign In</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default WatchList;