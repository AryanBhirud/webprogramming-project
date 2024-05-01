import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    return (
        <div>
        <div className="nav">
            <h1>Club TechKnowHow!</h1>
            <p>Born to learn...</p>
            <div className="nav-line">
                <p>{formattedDate}</p>
            </div>
            <hr />
        </div>
        <div className="navbar">
            <ul>
                <li>Home</li>
                <select name="install" id="install">
                    <option><li>Installation & Configuration</li></option>
                    <option>Operating Systems</option>
                    <option>Tools & Platforms</option>
                    <option>Compilers & Interpreters</option>
                </select>
                <select name="web programming" id="">
                    <option><li>Web Programming</li></option>
                    <option>Javascript</option>
                    <option>HTML</option>
                    <option>CSS</option>
                </select>
                <select name="programming" id="">
                    <option value=""><li>Programming</li></option>
                    <option value="">C++</option>
                    <option value="">Python</option>
                    <option value="">Java</option>
                </select>
                <select name="database" id="">
                    <option value=""><li>Database</li></option>
                    <option value="">SQLite</option>
                    <option value="">MySQL</option>
                    <option value="">MongoDb</option>
                </select>
                
                <li>Projects</li>
                <li><a href="theclub.jsx">The Club!</a></li>
            </ul>
            <hr/>
        </div>
        </div>
    )
}

export default Navbar;