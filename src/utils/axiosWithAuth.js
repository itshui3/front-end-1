import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: process.env.BE_URL,
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
}