import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import * as service from "../services/auth-service"
import './log.css';

const Login = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate();
    const login = () => {
        service.login(loginUser)
            .then((user) => navigate(`/profile/${user.username}`))
            .catch(e => alert(e));
    }

    return (
        <>
            <div className="a-box a-spacing-extra-large">
                <div className="a-box-inner">
                    <h1 className="mt-2 mb-3">Login</h1>
                    <label>Your name</label>
                    <input className="mb-3 form-control"
                           onChange={(e) =>
                               setLoginUser({...loginUser, username: e.target.value})}/>
                    <label>Password</label>
                    <input className="mb-3 form-control"
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