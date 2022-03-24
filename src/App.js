import './App.css';
import React, { useState } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Accueil from './Composants/Accueil';
import Contact from './Composants/Contact';
import About from './Composants/About';


function App() {
  const [load, setLoad] = useState(["main", ""])

  document.title = "Alain Gionet"
  return (
    <div className={load[0]}>
      <div className={load[1]}>
        <React.Fragment >
          <BrowserRouter>
            <div className="btnmain" >
              <Menu style={{ backgroundColor: "#5f43b2" }}>
                <Grid >
                  <Grid.Column  >
                    <Menu.Item className="btnmainx" style={{ color: "#96c2ff" }} as={NavLink} onClick={() => setLoad(["main", ""])} activeStyle={{ fontWeight: "bold", color: "white" }} to="/" exact={true}>Accueil   </Menu.Item>
                    <Menu.Item className="btnmainx" style={{ color: "#96c2ff" }} as={NavLink} onClick={() => setLoad(["back", "twinkling"])} activeStyle={{ fontWeight: "bold", color: "white" }} to="/About" exact={true}>About   </Menu.Item>
                    <Menu.Item className="btnmainx" style={{ color: "#96c2ff" }} as={NavLink} onClick={() => setLoad(["back", "twinkling"])} activeStyle={{ fontWeight: "bold", color: "white" }} to="/Contact" exact={true}>Contact   </Menu.Item>
                  </Grid.Column>
                </Grid>
              </Menu>
            </div>
            <div>
              <Switch>
                <Route path="/" setLoad component={Accueil} exact={true} />
                <Route path="/About" component={About} exact={true} />
                <Route path="/Contact" component={Contact} exact={true} />
              </Switch>
            </div>
          </BrowserRouter>
        </React.Fragment>
      </div>
    </div>
  )
}
export default App;



