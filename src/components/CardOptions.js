import React from 'react';

export default function CardOption(props) {
  return (
    props.options.map(opt => (
      <div key={opt.key} className="card">
        <div className="card-body">
          <h5 className="card-title">{opt.name}</h5>
          <a href="#" className="btn btn-primary" onClick={() => props.handleSelect(opt)}>Select</a>
        </div>
      </div>
  )));
}
