import React from "react";
import {  Card, Image, Grid  } from "semantic-ui-react";  

class Option extends React.Component {

  state = { decision: null }


  game = (userChoice, compChoice,  ) => {
    console.log(compChoice);
    
    if ( userChoice === "rock" && compChoice === "scissor") {
       this.setState({ decision: true}); 
      debugger}
    else if ( userChoice === "rock" && compChoice === "paper" ) {
        this.setState({ decision: false}); 
      debugger}

    
  }


  render() {
    return (
      <>
      <Grid.Column>
        <Card onClick={() => this.game(this.props.name, 
          this.props.gameOptions[Math.floor(Math.random()*this.props.gameOptions.length)].name, 
          )} >
          <Image src={this.props.image}/>
          <Card.Content style={{textAlign: "Center" }}>
            {this.props.name}
          </Card.Content>
        </Card>
      </Grid.Column>        
      </>
    );
  };
};


export default Option;