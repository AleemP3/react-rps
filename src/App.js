import React from 'react';
import { Container, Header } from "semantic-ui-react"; 
import Gameoption from "./components/Gameoption";
import Gamestart from "./components/Gamestart";

class App extends React.Component {
  state = { gameOptions: [
    {id: 1, name: "rock", 
      image: 'https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg'},
    {id: 2, name: "paper", 
      image: 'https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000181/23262905-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg' },
    {id: 3, name: "scissor", 
      image: 'https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg'}
  ]
}

  randChoice = () => {
    let randChoice = this.state.gameOptions[Math.floor(Math.random()*this.state.gameOptions.length)].name;
    return randChoice; 

  }

  render() {
    return (
      <Container style={{paddingTop: "15px"}}>
        <Header as="h1" style={{textAlign: "Center"}}>React RPS</Header>
        <hr />
        <Container style={{textAlign: "Center"}}>Please select a picture to Start</Container>
        <br />
        <Gameoption gameOptions={this.state.gameOptions} playGame={this.game} 
          randChoice={this.randomChoice}/>
          <Gamestart randChoice={this.randChoice}/>
      </Container>
    );
  };
};

export default App;
