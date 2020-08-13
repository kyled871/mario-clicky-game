import React, { Component } from 'react';
import Title from './components/Title/Title';
import Instructions from './components/Instructions/Instructions';
import characters from './characters.json';

class App extends Component {

  state = {
    characters
  };

  

  render() {

    return (
      <div className="App">
       <Title />
       <Instructions />
      </div>
    );

  }
}

export default App;
