import React from "react";

const HeadBar = () => {
    return (
        <>

            <div className="row mt-2">

                <div className="col-4 col-md-2 col-lg-1 col-xl-2">
                    <p><i className="fa-solid fa-film"></i> OMDB Movie</p>
                </div>

                <div className="col-6 ">
                    <input className="form-control form-rounded account-bg-color "
                           style="font-family:Arial, FontAwesome"
                           placeholder="&#xF002 Search Movies..."
                           type="text"/>
                </div>

                <div className="col-2 pt-sm-2">
                    <div className="float-right">
                        <a className="bg-color-black text-decoration-none" href="#"><i
                            className="fa-solid fa-user"></i><span
                            className="hidden-md hidden-sm hidden-xs ">  Profile</span></a>
                    </div>
                </div>


            </div>
        </>);
}

export default HeadBar;