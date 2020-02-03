import axios from 'axios';

export default () => {
    return axios.create({
        //TODO: update to correct endpoint
        baseURL: "http://need/endpoint",
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
}