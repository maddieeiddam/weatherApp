import React from 'react';
import { getAutoLocations } from '../../server/api/autocomplete.js';
import CardOptions from './CardOptions';
import SelectedCard from './SelectedCard';

// dream world (no time limit) to do list:
//  - add incremental search to handleChange fn
//  - sort option results by rank before render
//  - add error handling
//  - add regex validation to search
//  - add 'search again' functionality after city is selected

export class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      queryStr: '',
      options: [],
      selected: false,
      selection: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleForecast = this.handleForecast.bind(this);
  }

  handleChange = e => {
    // with more time I would edit this function to revise options as you typed
    this.setState({
      queryStr: e.target.value
    });
  }

  handleSearch = e => {
    e.preventDefault();
    let searchRes = [];
    const formatOption = opt => {
      let state = opt.Country.ID === 'US' ? opt.AdministrativeArea.ID : opt.Country.LocalizedName;
      let formatted = {
        key: opt.Key,
        name: `${opt.LocalizedName}, ${state}`,
      }
      searchRes.push(formatted);
    }

    getAutoLocations(this.state.queryStr)
      .then(res => res.map(opt => formatOption(opt)))
      .then(() => this.setState({options: searchRes}))
  }

  handleSelect = opt => {
    this.setState({
      selected: true,
      selection: opt
    })
  }

  handleForecast = key => {
    console.log('key:', key);
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
                          <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search for your city name"  onChange={this.handleChange} />
                      </div>
                      <div className="col-auto">
                        {/* only render search button before a selection has been made */}
                        {!this.state.selected && <button className="btn btn-lg btn-success" type="submit" onClick={this.handleSearch}>Search</button>}
                      </div>
                  </div>
                  <div className="card-body col-auto">
                    {/* either render all options OR the selected option */}
                    {this.state.selected ?
                        <SelectedCard city={this.state.selection} handleForecast={this.handleForecast} />
                      : <CardOptions options={this.state.options} handleSelect={this.handleSelect} />}
                  </div>
              </form>
          </div>
        </div>
      </div>
    )
  }
}
