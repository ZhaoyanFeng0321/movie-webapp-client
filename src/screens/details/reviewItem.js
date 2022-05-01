
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ReviewItem = ({item}) => {

    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979&i='+ item.to;

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

                    <div>
                        <i className="fas fa-star" style={{color:'#F5DE50'}}> </i> {item.rating}/10
                        <br/>
                        <p className="ms-1 mt-1">"{item.review}"</p>
                        <p className="wd-right wd-white">by.<Link to={`/profile/${item.from}`} className="wd-white" ><span className="fst-italic">{item.from}</span></Link></p>

                    </div>



                </div>
            </li>
        </>
    );
}
export default ReviewItem;