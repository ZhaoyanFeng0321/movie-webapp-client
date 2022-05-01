import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import * as service from "../services/auth-service"
import './log.css';

const Login = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate();
    const login = () => {
        service.login(loginUser)
            // .then(() => navigate(`/home`))
            .then(() => navigate(`/home`))
            .catch(e => alert(e));
    }

    return (
        <>
            <div className="a-box a-spacing-extra-large">
                <div className="a-box-inner">
                    <div className="col-1 mt-2">
                        <Link to="/home"><i className="fa fa-4x fa-solid fa-film wd-gold"/></Link>
                    </div>
                    <h1 className="mt-2 mb-3">Login</h1>
                    <label for="name">Your name</label>
                    <input id="name" className="mb-3 form-control"
                           onChange={(e) =>
                               setLoginUser({...loginUser, username: e.target.value})}/>
                    <label for="pw">Password</label>
                    <input id="pw" className="mb-3 form-control"
                           onChange={(e) =>
                               setLoginUser({...loginUser, password: e.target.value})}
                           type="password"/>
                    <button onClick={login}
                            className="btn mt-3 mb-3 form-control">Login
                    </button>
                    <div className="mb-3">
                        <Link  to={"/signup"}>Create new account? Signup-> </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;