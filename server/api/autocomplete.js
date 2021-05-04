const baseUrl = 'http://dataservice.accuweather.com/';
const key = 'KRYJv8qtlyEj0C7l8s6G9Db2H8pDKTcy';

export const getAutoLocations = str => {
  const reqUrl = `${baseUrl}locations/v1/cities/autocomplete?apikey=${key}&q=${str}`;
  return fetch(reqUrl)
    .then(res => res.json());
}
