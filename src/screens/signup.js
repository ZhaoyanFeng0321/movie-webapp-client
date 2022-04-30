import {useState} from "react";
import * as service
    from "../services/auth-service";
import {Link, useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import './log.css';
import Login from "./login";

const Signup = () => {
    const [newUser, setNewUser] = useState({});

    const navigate = useNavigate();
    const createList = (name) => {
        const list = {user: name, movie:[]};
        service.createWatchListByUser(list)
            .then(() => navigate(`/home`))

    }
    const signup = () =>
        service.signup(newUser)
            .then(()=>createList(newUser.username))
            .catch(e => alert(e));
    return (
        <>
            <div className="a-box a-spacing-extra-large">
                <div className="a-box-inner">
                    <h1 className="mt-2 mb-3">Create Account</h1>

                    <label>Your name</label>
                    <input className="mb-3 form-control"
                           onChange={(e) =>
                               setNewUser({...newUser, username: e.target.value})}
                    />
                    <label>Password</label>
                    <input className="mb-3 form-control"
                           onChange={(e) =>
                               setNewUser({...newUser, password: e.target.value})}
                           placeholder="at least 6 characters" type="password"/>
                    <label>Email</label>
                    <input className="mb-3 form-control"
                           onChange={(e) =>
                               setNewUser({...newUser, email: e.target.value})}
                           type="email"/>
                    <Form className="mb-3">
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Personal"
                                    name="group1"
                                    defaultChecked={type}
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={(e) =>
                                        setNewUser({...newUser, accountType: 'PERSONAL'})}
                                />
                                <Form.Check
                                    inline
                                    label="Actor"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onChange={(e) =>
                                        setNewUser({...newUser, accountType: 'ACTOR'})}
                                />
                                <Form.Check
                                    inline
                                    label="Administrator"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                    onChange={(e) =>
                                        setNewUser({...newUser, accountType: 'ADMIN'})}
                                />
                            </div>
                        ))}
                    </Form>
                    <button onClick={signup}
                            className="btn mb-3 form-control">Signup
                    </button>
                    <div className="mb-3">
                        <Link  to={"/login"}>Already have an account? Login-> </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup;