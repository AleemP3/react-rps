import React from "react";
import { Grid,   } from "semantic-ui-react"; 
import Option from "./Option";



const Gameoption = (props) => (

  <Grid columns={3}>
    <Grid.Row>
      {props.gameOptions.map( options => (
        <Option key={options.id} {... options} playGame={props.playGame} 
        randChoice={props.randChoice} gameOptions={props.gameOptions}/>
        ))
      }
    </Grid.Row>
  </Grid>

  
)




export default Gameoption;
