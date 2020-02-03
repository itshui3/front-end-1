import React, {useState} from 'react';
import axios from 'axios';

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
        <div>
            <header>
                Signup Page
            </header>

            <div>
                <form onSubmit={submitForm}>
                    <div>
                        <label>Create username</label>
                            <div>
                            <input name="username" type="text" value={values.username} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label>Create a password</label>
                            <div>
                            <input name="password" type="password" value={values.password} onChange={handleChange}/>
                        </div>
                    </div>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;