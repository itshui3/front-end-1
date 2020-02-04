import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

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

        axios
        .post(`https://fast-scrubland-91418.herokuapp.com/api/auth/login`, values)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            history.push(`/protected/${response.data.resource.id}`);
        })
        .catch(error => {
            console.log(error)
        })

        setValues({
            email: "",
            password: ""
        })
    }

     
    return (
        <div>
            <header>
                Login
            </header>

            <div>
            <form onSubmit={submitForm}>
                    <div>
                        <label>Email Address</label>
                            <div>
                            <input name="username" type="text" value={values.username} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                            <div>
                            <input name="password" type="password" value={values.password} onChange={handleChange}/>
                        </div>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}


export default Login;