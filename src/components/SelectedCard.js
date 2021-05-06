import React from 'react';

export default function SelectedCard(props) {
  return (
    <div key={props.city.key} className="card">
        <div className="card-body">
          <h5 className="card-title">{props.city.name}</h5>
          <a href="#" className="btn btn-primary" onClick={() => props.handleForecast(props.city.key)}>Get Forecast</a>
        </div>
    </div>
  )
}
