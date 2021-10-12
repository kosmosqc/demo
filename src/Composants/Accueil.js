import '../App.css';
import React, { Component } from 'react';


class Accueil extends Component {

    render() {
        return (
            <div className="accueil" style={{  color: "white",marginLeft : "60px", textAlign: "left" }}>
                <div className="title">
                    <p > Alain Gionet,<br />
                        Développeur web (Full-stack)</p>
                    <div className="cont" >
                        <h1 > <p className="st">Programmeur junior motivé, débrouillard et possède une excellente capacité d'analyse et de résolution de problème.</p>
                            <div className="cont">
                                <br /><p style={{ color: "#96c2ff" }}>Skill :</p>
                                <li>
                                    <span>Javascript</span>
                                </li>
                                <li>
                                    <span>React.js</span>
                                </li>
                                <li>
                                    <span>C#</span>
                                </li>
                                <li>
                                    <span>C++</span>
                                </li>
                                <li>
                                    <span>PHP</span>
                                </li>
                                <li>
                                    <span>HTML</span>
                                </li>
                                <li>
                                    <span>SQL</span>
                                </li>
                                <li>
                                    <span>Java</span>
                                </li>
                                <li>
                                    <span>Asp.net</span>
                                </li>
                            </div>
                            <div className="list">
                                <br /> <p style={{ color: "#96c2ff" }}>Outil :</p>
                                <li>
                                    <span>Windows 10</span>
                                </li>
                                <li>
                                    <span>Powershell</span>
                                </li>
                                <li>
                                    <span>Linux</span>
                                </li>
                                <li>
                                    <span>Visual code/studio</span>
                                </li>
                                <li>
                                    <span>Git hub</span>
                                </li>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Accueil;