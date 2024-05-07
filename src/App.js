import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Letreiro from './Letreiro';
import Relogio from './Relogio';
import Contador from './Contador';
import './App.css';

export default function App() {
    return (
        <>        
            <Router>
                <header>
                    <nav>
                        <Link to="/"> Home </Link>
                        <div className="dropdown">
                            <button className="dropbtn">Primeira Semana</button>
                            <div className="dropdown-content">
                                <Link to="/relogio">Relógio</Link>
                                <Link to="/letreiro">Letreiro</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Segunda Semana</button>
                            <div className="dropdown-content">
                                <Link to="/contador">Contador</Link>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route exact path="/relogio" element={<Relogio />} />
                        <Route exact path="/letreiro" element={<Letreiro />} />
                        <Route exact path="/contador" element={<Contador />} />
                    </Routes>
                </main>
            </Router>
        </>
    );
}
