import { useState } from "react";
import React from 'react';
import '../App.css';


//show
function Couleur(props) {
  return (
    <div className="link" style={{ display: 'flex', justifyContent: 'center', color: props.textcolor.couleur, textAlign: "center", marginTop: "150px" }} >
      <div className="contact-menu">
        <ul >
          <li><a href="https://www.linkedin.com/in/alain-gionet-8899a1220/"><i style={{ color: props.textcolor.couleur }} className="fab fa-linkedin-in"></i></a></li>
          <li><a href="mailto:kosmosqc@gmail.com"><i style={{ color: props.textcolor.couleur }} className="fas fa-at"></i></a></li>
          <li><a href="https://github.com/kosmosqc?tab=repositories"><i style={{ color: props.textcolor.couleur }} className="fab fa-git"></i></a></li>
          <li><a href="https://replit.com/@AlainGionet/Tic-tac-toe-1?v=1"><i style={{ color: props.textcolor.couleur }} className="fas fa-gamepad"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

function Contact() {

  const text = [{ couleur: "black" }, { couleur: "#96c2ff" }, { couleur: "aqua" }, { couleur: "red" }, { couleur: "orange" }, { couleur: "purple" }]
  let show = false
  const [move, setMove] = useState(20)
  const [i, setColor] = useState(0)
  
  if (move >= 120) {
    show = true
  }
  else {
    show = false
  }
  return (
    <div className="contact">

      <h1>
        {show &&
          <button onClick={() => move < 120 ? setMove(move) : setMove(move - 200)}>
            Haut
          </button>
        }
        <button onClick={() => move > 800 ? setMove(move) : setMove(move + 200)}>
          Bas
        </button>
        <button onClick={() => i < 5 ? setColor(i + 1) : setColor(i - 5)}>Changer la couleur</button>
      </h1>

      <div style={{ marginTop: move + "px" }}>
        <Couleur textcolor={text[i]} />
      </div>
    </div>
  )
}
export default Contact;