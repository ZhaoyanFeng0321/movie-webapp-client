import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Navigation from "../Navigation/Navigation";
import * as authService from "../../services/auth-service";
import NavigationPersonal from "../Navigation/NavigationPersonal";


const Search = () =>{

    const [login,setLogin] =useState(false);
    const[currentUser, serCurrentUser] = useState({});

    const titleRef = useRef()
    const {movieSearch} = useParams()
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979'
    const searchByTitle = async () => {
        const searchStr = titleRef.current.value || movieSearch || null
        const response = await axios.get(`${searchUrl}&s=${searchStr}`)
        setMovies(response.data.Search)
        titleRef.current.value = searchStr
        if(searchStr !== null && response.data.Response !=='False'){
            navigate(`/result/${searchStr}`)
        }
        else if(response.data.Response ==='False'){
            alert(response.data.Error + " Please try again.")
        }
    }

    useEffect(async () => {
        searchByTitle();
        try {
            let user = await authService.profile();
            serCurrentUser(user);
            setLogin(true);
        }catch(e){}
    },[])


    // useEffect(() => {
    //     searchByTitle();
    // }, [])

    return (
        <>
            {!login &&
            <div className="row mt-3 ms-5 me-5">
                <Navigation/>
            </div>}

            {login&&
                <div className="row mt-3 ms-5 me-5">
                    <NavigationPersonal/>
                </div>}




            <div className="row ms-5 me-5">

                <input ref={titleRef} className="form-control w-75" placeholder="Search movies.."/>
                <button className="btn btn-primary float-end w-25" onClick={searchByTitle}>Search</button>
            </div>
            </>
    );
}
export default Search;