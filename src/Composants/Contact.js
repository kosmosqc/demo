import { useState } from "react";
import React from 'react';
import { Card } from 'semantic-ui-react';


function Couleur(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', }} >
      <Card >
        <Card.Content >
          <Card.Header style={{ color: props.textcolor.couleur }} >Kosmos</Card.Header>
          <Card.Meta style={{ color: props.textcolor.couleur }}> Alain Gionet </Card.Meta>
          <Card.Meta style={{ color: props.textcolor.couleur }}>kosmosqc@gmail.com</Card.Meta>
        </Card.Content>
      </Card>
    </div>
  )
}

function Contact() {
  //exemple de props dans un tableau
  const text = [{ couleur: "black" }, { couleur: "blue" }, { couleur: "red" }, { couleur: "green" }, { couleur: "orange" }, { couleur: "purple" }]

  //exemple de hook
  const [move, setMove] = useState(20)
  const [i, setColor] = useState(0)

  return (
    <div >
      <h1 style={{display: "flex", justifyContent: "center" , marginTop: "50px" , fontSize:"15px"}}>

      
      <button onClick={() => setMove(move - 101)}>
        Haut
      </button>
      <button onClick={() => setMove(move + 101)}>
        Bas
      </button><br/>
      <button onClick={() => i < 5 ? setColor(i + 1) : setColor(i - 5)}>Changer la couleur</button>
      </h1>
      <div style={{ marginTop: move + "px" }}>
        <Couleur textcolor={text[i]} />
    
      </div>
    </div>
  )
}
export default Contact;