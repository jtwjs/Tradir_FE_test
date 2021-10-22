import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
});

export const getBeerList = async () => {
  const { data } = await httpClient.get('beers');

  return data;
};
