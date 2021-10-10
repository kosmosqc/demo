import './contact.css';
import React, { Component } from 'react';


class Accueil extends Component {

    render() {
        return (
            <div class="accueil" style={{ display: "flex", justifyContent: "center", color: "white", margin: "165px", textAlign: "left" }}>
                <h1 class="title">
                    Alain Gionet,<br />
                    developpeur web (Full-stack)
                    <br />
                    <div class="cont">
                        <br /><p >Programmeur junior motivé, débrouillard et possède une excellente capacité d'analyse et de résolution de problème.<br />
                            <br />Skill :&nbsp; <br />
                            <ul>
                                <li>
                                    <span>Javascript</span>
                                    
                                        <span>Javascript</span>
                                    
                                </li>
                                <li>
                                    <span>Java</span>
                                </li>
                            </ul>
                            Languages &nbsp;&nbsp;: &nbsp; Javascript,&nbsp; Java,&nbsp; C#,&nbsp; C++,&nbsp; PHP,&nbsp; HTML et SQL.<br />
                            Framework : &nbsp; React,&nbsp; ASP.net<br />
                            Outil&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; Windows 10,&nbsp; Powershell,&nbsp; Linux,&nbsp; VS code,&nbsp; Git hub<br />
                        </p>
                    </div>
                </h1>
            </div>
        );
    }
}
export default Accueil;