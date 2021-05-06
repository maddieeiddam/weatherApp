# Weather App

https://github.com/maddieeiddam/weatherApp

## Instructions

1. Clone the repository:
```bash
$ git clone https://github.com/maddieeiddam/weatherApp.git
```

2. Install [`nodejs`](https://nodejs.org/en/) and [`npm`](https://www.npmjs.com/) if you don't already have them.

3. Install dependencies:
```bash
$ npm install # or yarn
```

4. Run the app:
```bash
$ npm run dev # or yarn start
```

## Description
This is a simple react weather app using the AccuWeather API, built in React.  It was a five hour project, so there are a handful of improvements on the to-do list that were not completed.  If this became a longer project, I would:
  - hook up the api key in the .env file instead of hardcoding it
  - add error handling and validation
  - add loaders during API calls
  - create a parent component to render SearchBar and all cards, and move that logic out of SearchBar.js
  - add 'search again' functionality after the city is selected from options
  - add incremental search to the handleChange function
  - sort the option results by rank before rendering
  - improve the aesthetics of the app: add weather icons to forecast cards, format date, etc.

