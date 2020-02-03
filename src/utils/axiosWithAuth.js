import axios from 'axios';

export default () => {
    return axios.create({
        //TODO: update to correct endpoint
        baseURL: "https://fast-scrubland-91418.herokuapp.com/",
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
}