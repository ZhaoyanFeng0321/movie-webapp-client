import {Link} from "react-router-dom";

const WatchList = () => {
    return (
        <>
            <div className="mt-5 mb-5">

                <div className="row">
                    <Link to="/watchlist" className="wd-title wd-gold">Your Filmography ></Link>
                </div>
                <div className="mt-5 text-center">
                    <i className="fa fa-list wd-grey mb-3 fa-2x"/>
                    <p className="wd-white fw-bold">Your filmography is empty</p>
                    <p className="wd-white">Save movies to keep track of what you have acted.</p>
                    <Link to="/search">
                        <button className="wd-browse-button">Search and add movies</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default WatchList;