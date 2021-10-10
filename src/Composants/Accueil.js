import './contact.css';
import React, { Component } from 'react';


class Accueil extends Component {



    render() {
        return (
            <div style={{ display: "flex", justifyContent: "left", color: "white", margin: "165px", textAlign: "left" }}>
                <h1 class="title">Bonjour ,<br />
                    je suis Alain,<br />
                    developpeur web (Full-stack)
                    <br />
                    <div style={{ display: "flex", justifyContent: "center", color: "white", margin: "150px", textAlign: "left" }}>
                        <br /><p class="cont">Je suis un programmeur junior motivé, débrouillard et je possède une excellente capacité d'analyse et de résolution de problème.<br />
                            <br />Skill&nbsp; <br />
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