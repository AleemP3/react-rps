import React from "react";
import {  Card, Image, Grid  } from "semantic-ui-react";  
import Gamestart from "./Gamestart";
class Option extends React.Component {



  render() {
    return (
      <>
      <Grid.Column>
        <Card onClick={() => this.props.game(this.props.name)} >
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