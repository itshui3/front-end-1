import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Signup.css';

const Signup = (props) => {
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
        .post(`https://price-op.herokuapp.com/api/auth/registerHost`, {username: values.username, password: values.password})
        .then(response => {
            history.push('/login');
        })
        .catch(error => {
            console.log(error);
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
                        <input className="input-panel" name="username" type="text" value={values.username} onChange={handleChange} placeholder="Create Username" required/>
                    </div>
                    <div>
                        <input className="input-panel" name="password" type="password" value={values.password} onChange={handleChange} placeholder="Create Password" required/>
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