import axios from 'axios';
const instance = axios.create({baseURL: 'http://ec2-54-233-123-190.sa-east-1.compute.amazonaws.com:3001/'});
export default instance
