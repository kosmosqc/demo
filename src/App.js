import './App.css';
import React, { useState } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { useWindowsSize } from './Composants/useWindowsSize';
import Accueil from './Composants/Accueil';
import Contact from './Composants/Contact';



function App() {
  const [largeur] = useWindowsSize();
  let size = "25px"
  let h = "225px"
  const [load, setLoad] = useState(0)

  if (largeur < 600) {
    size = "12px"
    h = "107px"
  }
console.log(load)
  document.title = "Alain Gionet"

  if (load === 0) {
    return (
      <div className="main">
      <div  >
        <React.Fragment >
          <BrowserRouter>
            <h1 style={{ display: "flex", height: h, width: "150px", margin: "10px" }}>
              <Menu style={{ backgroundColor: "#5f43b2"}}>
                <Grid >
                  <Grid.Column  >
                    <Menu.Item as={NavLink} onClick={() =>load <1 ? setLoad(load - 0): setLoad(load - 1)} style={{ color: "#96c2ff", fontSize: size }} activeStyle={{ fontWeight: "bold", color: "white" }} to="/" exact={true}>Accueil   </Menu.Item>
                    <Menu.Item as={NavLink} onClick={() =>load >0 ? setLoad(load - 0): setLoad(load + 1)} style={{ color: "#96c2ff", fontSize: size }} activeStyle={{ fontWeight: "bold", color: "white" }} to="/about" exact={true}>About   </Menu.Item>
                    <Menu.Item as={NavLink} onClick={() => load >0 ? setLoad(load - 0): setLoad(load + 1)} style={{ color: "#96c2ff", fontSize: size }} activeStyle={{ fontWeight: "bold", color: "white" }} to="/contact" exact={true}>Contact   </Menu.Item>
                  </Grid.Column>
                </Grid>
              </Menu>
            </h1>
            <div style={{ marginTop: "-130px" }}>
              <Switch>
                <Route path="/"  exact={true} />
                <Route path="/About" component={Accueil} exact={true} />
                <Route path="/contact" component={Contact} exact={true} />
              </Switch>
            </div>
          </BrowserRouter>
        </React.Fragment>
      </div>
      </div>
    )
  }
  else {
    return (
      <div className="back">
        <div className="twinkling">
          <React.Fragment >
            <BrowserRouter>
              <h1 style={{ display: "flex", margin: "10px", height: h, width: "150px" }}>
                <Menu style={{ backgroundColor: "#5f43b2" }}>
                  <Grid >
                    <Grid.Column  >
                      <Menu.Item as={NavLink} onClick={() => load <1 ? setLoad(load - 0): setLoad(load - 1)} style={{ color: "#96c2ff", fontSize: size }} activeStyle={{ fontWeight: "bold" , color: "white" }} to="/" exact={true}>Accueil   </Menu.Item>
                      <Menu.Item as={NavLink} onClick={() => load >0 ? setLoad(load - 0): setLoad(load + 1)} style={{ color: "#96c2ff", fontSize: size }} activeStyle={{ fontWeight: "bold", color: "white" }} to="/about" exact={true}>About   </Menu.Item>
                      <Menu.Item as={NavLink} onClick={() => load >0 ? setLoad(load - 0): setLoad(load + 1)} style={{ color: "#96c2ff", fontSize: size }} activeStyle={{  color: "white" }} to="/contact" exact={true}>Contact   </Menu.Item>
                    </Grid.Column>
                  </Grid>
                </Menu>
              </h1>
              <div style={{ marginTop: "-130px" }}>
                <Switch>
                <Route path="/" component={Accueil} exact={true} />
                  <Route path="/About" component={Accueil} exact={true} />
                  <Route path="/contact" component={Contact} exact={true} />
                </Switch>
              </div>
            </BrowserRouter>
          </React.Fragment>
          </div>
        </div>
      
    );
  }
}
export default App;



