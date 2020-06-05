import axios from 'axios';

const api = axios.create({
    baseURL: 'http://c59c5773a484.ngrok.io'
});

export default api;