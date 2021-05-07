import Vue from 'vue'
import axios from 'axios'

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

axios.interceptors.response.use((response) => {
        return response.data
    },
    function (error) {
        if (error.response.status === 401) {
            
        }
        return Promise.reject(error);
    }
);

Vue.prototype.$axios = axios;
