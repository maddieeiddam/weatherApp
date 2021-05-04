import React from 'react';
import { getAutoLocations } from '../../server/api/autocomplete.js';

export class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      queryStr: '',
      options: []
    }
  }

  handleChange = e => {
    // with more time I would edit this function to revise options as you typed
    this.setState({
      queryStr: e.target.value
    });
  }

  handleSubmit = e => {
    let searchRes = [];
    const formatOption = opt => {
      let formatted = {
        key: opt.Key,
        name: `${opt.LocalizedName}, ${opt.AdministrativeArea.ID}`,
      }
      searchRes.push(formatted);
    }

    e.preventDefault();
    getAutoLocations(this.state.queryStr)
      .then(res => res.map(opt => formatOption(opt)))
      .then(() => this.setState({options: searchRes}))
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Weather App
          </a>
        </nav>
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
              <form className="card card-sm">
                  <div className="card-body row no-gutters align-items-center">
                      <div className="col-auto">
                          <i className="fas fa-search h4 text-body" />
                      </div>
                      <div className="col">
                          <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search your city name"  onChange={this.handleChange} />
                      </div>
                      <div className="col-auto">
                          <button className="btn btn-lg btn-success" type="submit" onClick={this.handleSubmit}>Search</button>
                      </div>
                  </div>
                  <div className="card-body col-auto">
                    {this.state.options.map(opt => (
                      <div key={opt.key} className="card">
                        <div className="card-body">
                          <h5 className="card-title">{opt.name}</h5>
                          <a href="#" className="btn btn-primary">Select</a>
                        </div>
                      </div>
                    ))}
                  </div>
              </form>
          </div>
        </div>
      </div>
    )
  }
}
