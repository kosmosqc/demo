import './App.css';
import React, { useEffect, useState } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { useWindowsSize } from './Composants/useWindowsSize';
import Accueil from './Composants/Accueil';
import Contact from './Composants/Contact';



function App() {
  const [largeur] = useWindowsSize();
  let size = "25px"
  let h = "150px"
 console.log(largeur)
if (largeur < 600){
  size = "10px"
  h = "60px"
}
  document.title = "Alain Gionet"
  return (
    <div className="twinkling" >
      <React.Fragment >
        <BrowserRouter>
          <h1 style={{ display: "flex", margin: "10px", height: h  }}>
            <Menu style={{ backgroundColor: "#5f43b2" }}>
              <Grid >
                <Grid.Column  >
                  <Menu.Item as={NavLink} style={{ color: "#96c2ff", fontSize: size}} activeStyle={{ fontWeight: "bold", color: "white" }} to="/" exact={true}>Accueil   </Menu.Item>
                  <Menu.Item as={NavLink} style={{ color: "#96c2ff", fontSize: size }} activeStyle={{ fontWeight: "bold", color: "white" }} to="/contact" exact={true}>Contact   </Menu.Item>
                </Grid.Column>
              </Grid>
            </Menu>
          </h1>
          <div style={{ marginTop: "-130px" }}>
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

export default App;



