import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/'; // базовий адрес API

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU5ZTQzYmM1YWJkNjJiY2U0YTQxMjI1MGNhMmI0YSIsInN1YiI6IjY0OGRmMWZjYzNjODkxMDBlYjMyOGIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.na6QWvyUcstLt3R2SMZMeFGFAjRDN7q7NqBOmfFB0qU',
  },
};

// функція отримання даних з бекенду
export const getDatas = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`, // шлях за яким мають бути отримані дані
    options
  );
  return response.data;
};

// Axios потрібен для обробки отриманих даних після запросу на бекенді
