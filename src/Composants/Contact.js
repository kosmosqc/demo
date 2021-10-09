import { useState } from "react";
import React from 'react';
import './contact.css';


function Couleur(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', color: props.textcolor.couleur, fontSize: "25px" , textAlign: "left"}} >
      <p>
        Alain Gionet aka Kosmos<br />
        email&nbsp;&nbsp; &nbsp;&nbsp; : <a href="mailto:kosmosqc@gmail.com">  kosmosqc@gmail.com</a><br />
        Linkedin :<a href="https://www.linkedin.com/in/alain-gionet-8899a1220/"> in</a><br />
        Code &nbsp;&nbsp;&nbsp;&nbsp; : <a href="https://replit.com/repls">Replit </a><br />
        gitHub&nbsp; &nbsp; : <a href="https://github.com/"> Git</a>
      </p>
    </div>
  )
}

function Contact() {
  //exemple de props dans un tableau
  const text = [{ couleur: "white" }, { couleur: "blue" }, { couleur: "red" }, { couleur: "green" }, { couleur: "orange" }, { couleur: "purple" }]

  //exemple de hook
  const [move, setMove] = useState(20)
  const [i, setColor] = useState(0)

  return (
    <div >
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: "50px", fontSize: "15px" }}>
        <button class="btn" onClick={() => move < 120? setMove(move):setMove(move - 100)}>
          Haut
        </button>
        <button class="btn" onClick={() => move > 600?setMove(move) :setMove(move + 100)}>
          Bas
        </button><br />
        <button class="btn" onClick={() => i < 5 ? setColor(i + 1) : setColor(i - 5)}>Changer la couleur</button>
      </h1>
      <div style={{ marginTop: move + "px" }}>
        <Couleur textcolor={text[i]} />

      </div>
    </div>
  )
}
export default Contact;