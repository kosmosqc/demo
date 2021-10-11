import { useState } from "react";
import React from 'react';
import '../App.css';


//test
function Couleur(props) {
  return (
    <div class="link" style={{ display: 'flex', justifyContent: 'center', color: props.textcolor.couleur, textAlign: "center" }} >
      <p>
        Alain Gionet<br />
        Lien: <br />
        <a hover={{ color: "white" }} style={{ color: props.textcolor.couleur }} href="mailto:kosmosqc@gmail.com"> E-mail</a><br />
        <a style={{ color: props.textcolor.couleur }} href="https://www.linkedin.com/in/alain-gionet-8899a1220/"> Linkedin</a><br />
        <a style={{ color: props.textcolor.couleur }} href="https://replit.com/repls">Code </a><br />
        <a style={{ color: props.textcolor.couleur }} href="https://github.com/"> Git</a>
      </p>
    </div>
  )
}

function Contact() {

  const text = [{ couleur: "#96c2ff" }, { couleur: "aqua" }, { couleur: "green" }, { couleur: "red" }, { couleur: "green" }, { couleur: "orange" }, { couleur: "purple" }]
  let myConditionIsTrue = false
  const [move, setMove] = useState(20)
  const [i, setColor] = useState(0)

  if (move >= 120) {
    myConditionIsTrue = true
  }
  else {
    myConditionIsTrue = false
  }
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: "-90px", fontSize: "15px" }}>
        {myConditionIsTrue &&
          <button class="btn" onClick={() => move < 120 ? setMove(move) : setMove(move - 100)}>
            Haut
          </button>
        }
        <button class="btn" onClick={() => move > 600 ? setMove(move) : setMove(move + 100)}>
          Bas
        </button>
        <button class="btn" onClick={() => i < 5 ? setColor(i + 1) : setColor(i - 5)}>Changer la couleur</button>
      </h1>

      <div style={{ marginTop: move + "px" }}>
        <Couleur textcolor={text[i]} />
      </div>
    </div>
  )
}
export default Contact;