import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

if(!API_BASE_URL) {
    throw new Error("Application needs REACT_APP_API_BASE_URL env to run.");
}

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem("logged_in_user");

    if(token) {
        config.headers['Authorization'] = token;
    }

    return config;
});
