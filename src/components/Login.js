import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {

    const[values, setValues] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        const { name, value } = event.target
       // console.log(event.target.name);
       // console.log(event.target.value);
        setValues({
            ...values, 
            [name]: value
        })
    }

     //Axios to server
    const submitForm = event => {
        event.preventDefault();
        console.log(values);

        axios
        .post(`https://fast-scrubland-91418.herokuapp.com/api/auth/login`, values)
        .then(response => {
            console.log(response);
            console.log(response.data);
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
                        <input className="input-panel" name="username" type="text" value={values.username} onChange={handleChange} placeholder="Username"/>
                    </div>
                    <div>
                        <input className="input-panel" name="password" type="password" value={values.password} onChange={handleChange} placeholder="Password"/>
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