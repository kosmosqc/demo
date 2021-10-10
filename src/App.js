import './App.css';
import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Accueil from './Composants/Accueil';
import Contact from './Composants/Contact';



class App extends Component {
  
  render() {
    document.title = "Alain Gionet"
    return (
      <div className="twinkling" >
        <React.Fragment >
          <BrowserRouter>
            <h1 style={{display: "flex", margin : "10px" , height: "150px"}}>
              <Menu style={{ backgroundColor: "#5f43b2" }}>
                <Grid >
                <Grid.Column  >
                <Menu.Item as={NavLink} style={{color: "#96c2ff", fontSize: "25px"}} activeStyle={{ fontWeight: "bold", color: "white" }} to="/" exact={true}>Accueil   </Menu.Item>
                <Menu.Item as={NavLink} style={{color: "#96c2ff", fontSize: "25px"}} activeStyle={{ fontWeight: "bold", color: "white" }} to="/contact" exact={true}>Contact   </Menu.Item>
                </Grid.Column>
                </Grid>
              </Menu>
              </h1>
              <div style={{marginTop : "-130px"}}>
            <Switch>
              <Route path="/" component={Accueil} exact={true} />
              <Route path="/contact" component={Contact} exact={true} />
            </Switch>
            </div>
          </BrowserRouter>
        </React.Fragment>
        </div>
    );
  }
}
export default App;



