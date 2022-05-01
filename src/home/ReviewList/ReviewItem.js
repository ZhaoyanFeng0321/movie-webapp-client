import movie_service from "../../services/movie-service";
import service from "../../services/user-service";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ReviewItem = ({item}) => {
    const[postname, setname] = useState();

    // useEffect(async () => {
    //     const user = await service.findUserById(item.from);
    //     setname(user.username);
    // })

    // const[poster,setposter] = useState();
    // const[title,settitle] = useState();
    // useEffect(async () => {
    //     const movie = await movie_service.findMovieById(item.to);
    //     setposter(movie.poster);
    //     settitle(movie.title);
    // })

    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979&i='+ item.to;

    // const search = async () => {
    //     const response = await axios.get(`${searchUrl}`)
    //     setMovies(response.data)
    // }

    useEffect(() => {
        async function search()  {
            const response = await axios.get(`${searchUrl}`)
            setMovies(response.data)
        }
         search();
    }, [])


    return (
        <>
        <li className="list-group-item">
            <div className="row">

                <div className="col-2 col-sm-0 col-md-2 col-lg-2 d-none d-lg-block">

                    <Link to={`/details/${movies.imdbID}`} className="wd-gold">
                    <img className="wd-poster wd-section-left" src={movies.Poster} alt=""/>
                        <p className="wd-movie ">{movies.Title}</p></Link>
                </div>

                <div className="col-10 col-sm-12 col-md-10 col-lg-10 ">

                    {/*<i className="fa fa-solid fa-star wd-gold"/>*/}
                    {/*<span className="fw-bold">{item.rating}/10</span>*/}
                    <p className="mt-3">"{item.review}"</p>
                    <p className="wd-white wd-signin">by.<Link to={`/profile/${item.from}`} className="wd-white" ><span className="fst-italic">{item.from}</span></Link></p>
                    <p className="wd-right me-1">{item.postedOn}</p>
                </div>

            </div>
        </li>
        </>
        );
}
export default ReviewItem;