import { useState } from "react";
import React from 'react';
import '../App.css';
import palette from "../color-palette.png"
import main from "../main.png"
//show
function Couleur(props) {
  const [isShown, setIsShown ] = useState(false);
  const [text, setText ] = useState(" ");
 
 
  var  text1 = " Petit projet personnel : une extension en version beta pour firefox qui permet d'arrondir les prix sur le site d'Amazon. Example : 3.99$ devient 4$ "
  

  
  return (

    <div className="link" style={{ display: 'flex', justifyContent: 'center', color: props.textcolor.couleur, textAlign: "center" }} >

      <div className="contact-menu">

        <ul >
          <li><a onMouseOver={() => setText(text1)} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} href="https://addons.mozilla.org/en-US/firefox/addon/rounded-price-for-amazon/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"><i style={{ color: props.textcolor.couleur }} className="fas fa-bolt"></i></a></li>
          <li><a onMouseOver={() => setText("Linkedin")} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} href="https://www.linkedin.com/in/alain-gionet-8899a1220/"><i style={{ color: props.textcolor.couleur }} className="fab fa-linkedin-in"></i></a></li>
          <li><a onMouseOver={() => setText("kosmosqc@gmail.com")} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} href="mailto:kosmosqc@gmail.com"><i style={{ color: props.textcolor.couleur }} className="fas fa-at"></i></a></li>
          <li><a onMouseOver={() => setText("Git hub")} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} href="https://github.com/kosmosqc?tab=repositories"><i style={{ color: props.textcolor.couleur }} className="fab fa-git"></i></a></li>
          <li><a onMouseOver={() => setText("Jeux de tic tac toe en Javascript")} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} href="https://replit.com/@AlainGionet/Tic-tac-toe-1?v=1"><i style={{ color: props.textcolor.couleur }} className="fas fa-gamepad"></i></a></li>
        </ul>
        {isShown && (
          <div>
            <p style={{ color : "white", marginTop : "20px"}}>
              {text}

            </p>
          </div>
        )}
      </div>

    </div>
  )
}

function Contact() {

  const text = [{ couleur: "#96c2ff" }, { couleur: "grey" }, { couleur: "aqua" }, { couleur: "red" }, { couleur: "orange" }, { couleur: "purple" }]

  const [move, setMove] = useState(20)
  const [i, setColor] = useState(0)

  const disableButton = move >= 120 ? (<button onClick={() => move < 120 ? setMove(move) : setMove(move - 200)}>  ↑ </button>) : (<button disabled>↑</button>)

  return (
    <div className="contact">

      <h1>
      
        {disableButton}
        <button onClick={() => move > 800 ? setMove(move) : setMove(move + 200)}>
          ↓
        </button>
        <button onClick={() => i < 5 ? setColor(i + 1) : setColor(i - 5)}><img src={palette} alt="" style={{ height: "35px", width: "35px" }} /></button>
        
      </h1>
      <img className="img"  src={main} alt="" ></img>
      
      <div style={{ marginTop: move + "px" }}>
        <Couleur textcolor={text[i]} />
        
      </div>
      
    </div>
  )
}
export default Contact;