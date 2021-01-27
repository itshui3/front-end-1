import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setHostID } from '../actions';
import './Login.css';

const Login = () => {
    const setHost = useDispatch();
    const history = useHistory();

    const[values, setValues] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        const { name, value } = event.target
        setValues({
            ...values, 
            [name]: value
        })
    }

    

    const submitForm = event => {
        event.preventDefault();

        axios
        .post(`$https://price-op.herokuapp.com/api/auth/login`, values)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('host_id', response.data.resource.id);
            history.push(`/protected`);
            setHost(setHostID(response.data.resource.id));
        })
        .catch(error => {
            console.log(error)
        })

        setValues({
            username: "",
            password: ""
        })
    }

    return (
        <div className="login-container">
            <div className="login-panel">
                <img src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg" alt="img"></img>
                <h1>User Log In</h1>
                <form onSubmit={submitForm}>
                    <div>
                        <input className="input-panel" name="username" type="text" value={values.username} onChange={handleChange} placeholder="Username" required/>
                    </div>
                    <div>
                        <input className="input-panel" name="password" type="password" value={values.password} onChange={handleChange} placeholder="Password" required/>
                    </div>
                    <button className="loginBtn" type="submit">Log In</button>
                    <div className="login-panel-btm">
                    <label>Don’t have an account?</label>
                    <button className="signUpBtn"><NavLink to="/signup">Sign up</NavLink></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;