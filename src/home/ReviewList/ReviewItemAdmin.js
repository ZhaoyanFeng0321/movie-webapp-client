import movie_service from "../../services/movie-service";
import service from "../../services/user-service";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ReviewItem = ({item,deleteReview}) => {
    const[postname, setname] = useState();

    useEffect(async () => {
        const user = await service.findUserById(item.from);
        setname(user.username);
    })

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

                    <div className="col-3 d-md-block d-sm-none d-none">

                        <img className="wd-poster wd-section-left" src={movies.Poster} alt=""/>
                        <p className="wd-movie wd-gold">{movies.Title}</p>
                    </div>


                    <div className="col-9 col-sm-8">

                        <i className="fa fa-solid fa-star wd-gold"/>
                        <span className="fw-bold">{item.rating}/10</span>
                        <i className="fas fa-times-circle float-end wd-gold" onClick={() => deleteReview(item._id)}/>

                        <p className="mt-1">{item.postedOn}</p>
                        <p>{item.review}</p>
                        <p className="wd-right wd-white">by.<Link to={`/profile/${postname}`} className="wd-white" ><span className="fst-italic">{postname}</span></Link></p>
                    </div>

                </div>
            </li>
        </>
    );
}
export default ReviewItem;