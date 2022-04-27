import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import * as authService from "../../services/auth-service";
import HomePersonal from "../HomeScreen/HomePersonal";
import HomeActor from "../HomeScreen/HomeActor";
import Navigation from "../Navigation/Navigation";
import NavigationPersonal from "../Navigation/NavigationPersonal";
import axios from "axios";


const Search = () => {
    const {username} = useParams();
    const navigate = useNavigate();
    const [currentUser,setCurrentUser] = useState({});
    const [profile, setProfile] = useState({});
    useEffect(async () => {
        try {
            let user = await authService.profile();
            setCurrentUser(user.user);
            if(username!==user.username){
                user = await authService.findUser(username);
            }else{
                user = await authService.findUser(username);
                setCurrentUser(user);
            }
            setProfile(user);
        } catch (e) {
            navigate('/login');
        }
    }, [username]);

    const titleRef = useRef()
    const {movieSearch} = useParams()
    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=b2bd5979'
    const searchByTitle = async () => {
        const searchStr = titleRef.current.value || movieSearch || null
        const response = await axios.get(`${searchUrl}&s=${searchStr}`)
        setMovies(response.data.Search)
        titleRef.current.value = searchStr
        if(searchStr !== null && response.data.Response !=='False'){
            navigate(`/result/${username}/${searchStr}`)
        }
        else if(response.data.Response ==='False'){
            alert(response.data.Error + " Please try again.")
        }
    }

    useEffect(() => {
        searchByTitle()
    }, [])


    return(
        <>

                <div className="row mt-3 ms-5 me-5">
                    <NavigationPersonal/>
                </div>



            <div className="row ms-5 me-5">

                <input ref={titleRef} className="form-control w-75" placeholder="Search movies.."/>
                <button className="btn btn-primary float-end w-25" onClick={searchByTitle}>Search</button>
            </div>
        </>
    )
}
export default Search;