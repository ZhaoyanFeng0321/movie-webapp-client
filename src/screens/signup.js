import {useState} from "react";
import * as service
  from "../services/auth-service";
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form'

const Signup = () => {
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();
  const signup = () =>
      service.signup(newUser)
          .then(() => navigate(`/profile/${newUser.username}`))
          .catch(e => alert(e));
  return (
      <div>
        <h1>Signup</h1>
        <input className="mb-2 form-control"
               onChange={(e) =>
                   setNewUser({...newUser, username: e.target.value})}
               placeholder="username"/>
        <input className="mb-2 form-control"
               onChange={(e) =>
                   setNewUser({...newUser, password: e.target.value})}
               placeholder="password" type="password"/>
        <input className="mb-2 form-control"
               onChange={(e) =>
                   setNewUser({...newUser, email: e.target.value})}
               placeholder="email" type="email"/>
          <Form>
              {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                          inline
                          label="Personal"
                          name="group1"
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
                className="btn btn-primary mb-5">Signup
        </button>
      </div>
  );
}
export default Signup;