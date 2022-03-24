import '../Skill.css';
import React from 'react';
function About() {


    return (


        <div class="container">
            <h3 style={{color : "white" , textAlign : 'center' , fontSize : "26px"}}> Alain Gionet<br />
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
                    <li><span class="greenline visual"></span><em>Visual code/studio</em></li>
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






        // <div className="accueil" style={{ color: "white", marginLeft: "130px", textAlign: "left" }}>
        //     <div className="title">
        //         <p > Alain Gionet,<br />
        //             Programmeur (Full-stack)</p>
        //         <div >
        //             <h1 > <p className="st">Programmeur junior motivé, débrouillard et possède une excellente capacité d'analyse et de résolution de problème.</p>

        //                 <div className="cont">
        //                     <br /><p style={{ color: "#96c2ff" }}>Skill :</p>
        //                     <ul>
        //                         <li>Javascript <img src={palette} alt=""></img></li>
        //                         <li>React.js</li>
        //                         <li>C#</li>
        //                         <li>C++</li>
        //                         <li>PHP</li>
        //                         <li>HTML</li>
        //                         <li>CSS</li>
        //                         <li>SQL</li>
        //                         <li>Java</li>
        //                         <li>Asp.net</li>
        //                     </ul>
        //                 </div>
        //                 <div className="cont">
        //                     <br /> <p style={{ color: "#96c2ff" }}>Outil :</p>
        //                     <ul>
        //                         <li>Windows 10</li>
        //                         <li>Powershell</li>
        //                         <li>Linux</li>
        //                         <li>Visual code/studio</li>
        //                         <li>Git hub</li>
        //                         <li>PhotoShop</li>
        //                     </ul>
        //                 </div>
        //                 <div className="cont">
        //                     <br /> <p style={{ color: "#96c2ff" }}>Passion :</p>
        //                     <ul>
        //                         <li>Informatique</li>
        //                         <li>Astronomie</li>
        //                         <li>Science</li>
        //                     </ul>
        //                 </div>
        //             </h1>
        //         </div>
        //     </div>
        // </div>
    );
}
export default About;