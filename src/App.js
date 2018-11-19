import React, { Component } from 'react';

import './assets/css/main.scss';

import Navigation from './components/Navigation/Navigation';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleDoubleLeft, faAngleDoubleRight)


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
