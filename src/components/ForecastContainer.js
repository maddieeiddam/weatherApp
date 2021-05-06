import React from 'react';

export default function ForecastContainer(props) {
  return (
    props.forecast.map(day => (
      <div key={day.EpochDate} className="card">
        <div className="card-body">
          <h5 className="card-title">{new Date(day.Date).toString()}</h5>
          <h6>{day.Day.IconPhrase}</h6>
          <h6>High: {day.Temperature.Maximum.Value}˚ {day.Temperature.Maximum.Unit}</h6>
          <h6>Low: {day.Temperature.Minimum.Value}˚ {day.Temperature.Minimum.Unit}</h6>
        </div>
      </div>
    )));
}
