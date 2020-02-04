import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = (props) => {

    const[values, setValues] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        const { name, value } = event.target
      //  console.log(event.target.name);
      //  console.log(event.target.value);
        setValues({
            ...values, 
            [name]: value
        })
    }

    const submitForm = event => {
        event.preventDefault();

        //Axios to server
        axios
        .post(`https://fast-scrubland-91418.herokuapp.com/api/auth/registerHost`, values)
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
        <div className="signup-container">
            <div className="signup-panel">
                <img src="https://www.fodors.com/wp-content/uploads/2019/08/airbnb-hero-.jpg" alt="img"></img>
                <h1>Sign Up</h1>
                <form onSubmit={submitForm}>
                    <div>
                        <input className="input-panel" name="username" type="text" value={values.username} onChange={handleChange} placeholder="Create Username"/>
                    </div>
                    <div>
                        <input className="input-panel" name="password" type="password" value={values.password} onChange={handleChange} placeholder="Create Password"/>
                    </div>
                    <button className="signupBtn" type="submit">Sign up</button>
                    <div className="signup-panel-btm">
                    <label>Already have an account?</label>
                    <button className="signUpBtn"><NavLink to="/">Log in</NavLink></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;