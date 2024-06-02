import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9000/api/v1',
  // baseURL: 'http://127.0.0.1:5050/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
