import axios from 'axios';

const API_KEY = '57022805-d846619b0274c856f5d4e7759';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return axios.get(`${BASE_URL}?${urlParams}`).then(response => response.data);
};
