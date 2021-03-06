import React, { Component } from 'react';
import Title from './components/Title/Title';
import Instructions from './components/Instructions/Instructions';
import CharacterCard from './components/CharacterCard/CharacterCard';
import characters from './characters.json';
import Wrapper from './components/Wrapper/Wrapper';
import sfx from "./utils/sfx"

class App extends Component {

  state = {
    characters,
    clicked: [],
    score: 0,
    highScore: 0,
    msg: "",

    musicPlaying: false
  };


  highScore = () => {

    if (this.state.score > this.state.highScore) {

      let hiScore = this.state.score
      localStorage.setItem('localHighScore', this.state.score)
  
      this.setState({
        highScore: hiScore
      })
    }
  }

  randomizeBoard = characters => {

    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    return characters;

  }

  handleRandomize = () => {
    let randomCharacter = this.randomizeBoard(characters)
    this.setState({ character: randomCharacter})
  }

  componentDidMount = () => {
    this.handleRandomize()
    let initScore = localStorage.getItem('localHighScore')
    console.log(localStorage)

    this.setState({
      highScore: initScore || 0
    })
  }

  randomMessage = () => {
    let messageArr = [
      "Wahoo!",
      "Nice One!",
      "Correct!",
      "Mama Mia!"
    ]

    let randomMesg = messageArr[Math.floor(Math.random() * messageArr.length)]

    this.setState({
      msg: randomMesg
    })

    
  }


  clickChar = (event) => {

    if (!this.state.musicPlaying) {
      sfx.themeSong()

      this.setState({
        musicPlaying: true
      })
    }

    
    this.handleRandomize()
    const clicked = event.id

    if (this.state.clicked.indexOf(clicked) === -1 ) {
      this.randomMessage()
      sfx.coinSound()
      this.setState({
        clicked: this.state.clicked.concat(clicked),
        score: this.state.score +1,
      });

    } else {

      this.highScore()
      sfx.wrongSound()
      this.setState({
        clicked: [],
        score: 0,
        msg: `You already clicked ${event.name}! Try Again!`
      })
      
    }
  }
  

  render() {

    return (
      <div className="App">
       <Title score={this.state.score} highScore={this.state.highScore} msg={this.state.msg}/>
       <Instructions />
       <Wrapper>
       <div className="row">
       {this.state.characters.map(character => (
          <CharacterCard 
            clickChar = {this.clickChar}
            key = {character.id}
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
