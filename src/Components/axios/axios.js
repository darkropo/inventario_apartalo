import axios from 'axios';
const {BASE_URL_API} = require('../config');
const instance = axios.create({baseURL: BASE_URL_API});
export default instance