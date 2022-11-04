import axios from 'axios';

export default axios.create({
  baseURL: 'https://mmo-games.p.rapidapi.com',
  withCredentials: true,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
  }
})