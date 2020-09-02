import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-f07da.firebaseio.com/'
});

export default instance;
