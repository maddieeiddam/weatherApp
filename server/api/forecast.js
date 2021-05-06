const baseUrl = 'http://dataservice.accuweather.com/';
const key = 'KRYJv8qtlyEj0C7l8s6G9Db2H8pDKTcy';

export const getForecast5Day = id => {
  const reqUrl = `${baseUrl}forecasts/v1/daily/5day/${id}?apikey=${key}`;
  return fetch(reqUrl)
    .then(res => res.json());
}
