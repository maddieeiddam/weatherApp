import React from 'react';
import { SearchBar } from './components/SearchBar.js';
import ReactDOM from 'react-dom';

const Index = () => {
  return (
    <div>
      <SearchBar />
    </div>

  )
};

ReactDOM.render(<Index />, document.getElementById('app'));
