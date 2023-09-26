import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://healthfitback-edf77344271d.herokuapp.com/api/v1',
  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
