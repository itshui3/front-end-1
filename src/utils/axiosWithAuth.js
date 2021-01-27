import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: "https://price-op.herokuapp.com/",
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
}