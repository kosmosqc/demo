import '../App.css';
import React from 'react';

function About() {


    return (
        <div className="accueil" style={{ color: "white", marginLeft: "130px", textAlign: "left" }}>
            <div className="title">
                <p > Alain Gionet,<br />
                    Développeur web (Full-stack)</p>
                <div >
                    <h1 > <p className="st">Programmeur junior motivé, débrouillard et possède une excellente capacité d'analyse et de résolution de problème.</p>
                        <div className="cont">
                            <br /><p style={{ color: "#96c2ff" }}>Skill :</p>
                            <ul>
                                <li>Javascript</li>
                                <li>React.js</li>
                                <li>C#</li>
                                <li>C++</li>
                                <li>PHP</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SQL</li>
                                <li>Java</li>
                                <li>Asp.net</li>
                            </ul>
                        </div>
                        <div className="cont">
                            <br /> <p style={{ color: "#96c2ff" }}>Outil :</p>
                            <ul>
                                <li>Windows 10</li>
                                <li>Powershell</li>
                                <li>Linux</li>
                                <li>Visual code/studio</li>
                                <li>Git hub</li>
                                <li>PhotoShop</li>
                            </ul>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    );
}
export default About;