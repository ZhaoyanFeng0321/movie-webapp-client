import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import HeadBar from "./headbar";
import MovieList from "../MovieList";

const MovieDetail = () => {
    return (
        <>
        <div className="row mt-2">
            <HeadBar/>
        </div>

    <div className="row ">
        <div className="col-4 col-md-2 col-lg-1 col-xl-2" style={{"position": "relative"}} >
            <NavigationSidebar/>
        </div>


        <div className="col-8 ">




            <div className="list-group ">
                <MovieList/>
            </div>



        </div>
    </div>
    </>

        );

};
export default MovieDetail;