import '../Skill.css';
import React from 'react';
import "../App.js"



function About() {
    
    return (
        <div class="container">
            <h3> Alain Gionet<br />
                Programmeur (Full-stack) motivé, débrouillard et possède une excellente capacité d'analyse et de résolution de problème.</h3>
            <div class="col">
                <h2 class="titulo">Skill</h2>
                <ul class="skill">
                    <li><span class="blueline javascript"></span><em>Javascript</em></li>
                    <li><span class="blueline react"></span><em>React.js</em></li>
                    <li><span class="blueline csharp"></span><em>C#</em></li>
                    <li><span class="blueline cplus"></span><em>C++</em></li>
                    <li><span class="blueline php "></span><em>PHP</em></li>
                    <li><span class="blueline html"></span><em>HTML</em></li>
                    <li><span class="blueline css"></span><em>CSS</em></li>
                    <li><span class="blueline sql"></span><em>SQL</em></li>
                    <li><span class="blueline java"></span><em>Java</em></li>
                    <li><span class="blueline Asp"></span><em>Asp.net</em></li>

                </ul>
            </div>
            <div class="col">
                <h2 class="plataformas titulo">Outil</h2>
                <ul class="skill">
                    <li><span class="greenline win10"></span><em>Windows 10</em></li>
                    <li><span class="greenline powershell"></span><em>Powershell</em></li>
                    <li><span class="greenline linux"></span><em>Linux</em></li>
                    <li><span class="greenline visual"></span><em>Visual code</em></li>
                    <li><span class="greenline git"></span><em>Git Hub</em></li>
                    <li><span class="greenline ps"></span><em>PhotoShop</em></li>
                </ul>
            </div>
            <div class="col">
                <h2 class="programas titulo">Passion</h2>
                <ul class="skill">
                    <li><span class="redline informatique"></span><em>Informatique</em></li>
                    <li><span class="redline astronomie"></span><em>Astronomie</em></li>
                    <li><span class="redline science"></span><em>Science</em></li>
               
                </ul>
            </div>
        </div>
    );
}
export default About;