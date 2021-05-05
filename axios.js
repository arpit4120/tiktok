import axios from 'axios';

const instance = axios.create({
  baseURL:"https://tiktokclone-arpit-kumar-jain.herokuapp.com/"
});

export default instance;