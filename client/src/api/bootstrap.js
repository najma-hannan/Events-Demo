import axios from 'axios';
import { isAuthenticated, retrieveUser } from '../utils';

//const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
const API_BASE_URL = "http://127.0.0.1:3000"
if(!API_BASE_URL) {
    throw new Error("Application needs REACT_APP_API_BASE_URL env to run.");
}

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use(function(config) {
    if(isAuthenticated()) {
        const user = retrieveUser();
        config.headers['Authorization'] = user.token;
    }

    return config;
});
