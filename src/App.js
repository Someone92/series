import React, { Component } from 'react';

import './assets/css/main.scss';

import Navigation from './components/Navigation/Navigation';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>

        <Calendar></Calendar>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
