import React, { Component } from 'react';
import Title from './components/Title/Title';
import Instructions from './components/Instructions/Instructions';
import CharacterCard from './components/CharacterCard/CharacterCard';
import characters from './characters.json';
import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {

  state = {
    characters,
    clicked: [],
    score: 0
  };

  clickChar = id => {
    const characters = this.state.characters.filter(character => character.id !== id);
    this.setState({ characters })
  }
  

  render() {

    return (
      <div className="App">
       <Title score={this.state.score}/>
       <Instructions />
       <Wrapper>
       <div className="row">
       {this.state.characters.map(character => (
          <CharacterCard 
            clickChar = {this.clickChar}
            id = {character.id}
            name = {character.name}
            image = {character.image}
            isClicked = {character.isClicked}
          />

       ))}
       </div>
       </Wrapper>
      </div>
    );

  }
}

export default App;
