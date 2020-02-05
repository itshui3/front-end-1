import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: "https://fast-scrubland-91418.herokuapp.com/",
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
}