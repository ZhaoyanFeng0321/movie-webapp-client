import movie_service from "../../services/movie-service";
import service from "../../services/user-service";
import {useEffect, useState} from "react";

const ReviewItem = ({
    item = {
        "img": "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        "to": "The Batman",
        "rating": 10,
        "review":"I hesitate to say that a movie is perfect, especially after a first viewing. But gosh dang if this isnt close. And boy does it earn its beefy three hour runtime. Batman was always meant to be a film noir. And it is incredible to me that we haven't seen this before now. This is a mystery crime drama film that happens to feature Batman.",
        "from": "benjaminskylerhill",
        "postedOn": "now"
    }
                             }) => {
    const[name, setname] = useState();

    useEffect(async () => {
        const user = await service.findUserById(item.from);
        setname(user.username);
    })

    const[poster,setposter] = useState();
    const[title,settitle] = useState();
    useEffect(async () => {
        const movie = await movie_service.findMovieById(item.to);
        setposter(movie.poster);
        settitle(movie.title);
    })

    return (
        <>
        <li className="list-group-item">
            <div className="row">

                <div className="col-3 d-md-block d-sm-none d-none">

                    <img className="wd-poster wd-section-left" src={poster} alt=""/>
                    <p className="wd-movie wd-gold">{title}</p>
                </div>


                <div className="col-9 col-sm-8">

                    <i className="fa fa-solid fa-star wd-gold"/>
                    <span className="fw-bold">{item.rating}/10</span>
                    <p className="mt-1">{item.postedOn}</p>
                    <p>{item.review}</p>
                    <p className="wd-right fst-italic">by.{name}</p>
                </div>

            </div>
        </li>
        </>
        );
}
export default ReviewItem;