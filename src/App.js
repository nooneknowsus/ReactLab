import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Letreiro from './components/Letreiro';
import Relogio from './components/Relogio';
import Contador from './components/Contador';
import TableOfContents from './components/TableOfContents';
import TodoList from './components/TodoList';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
import TerceiraSemana from './components/TerceiraSemana';
import QuartaSemana from './components/QuartaSemana';

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
                        <div className="dropdown">
                            <button className="dropbtn">Terceira Semana</button>
                            <div className="dropdown-content">
                                <Link to="/terceirasemana">Components</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Quarta Semana</button>
                            <div className="dropdown-content">
                                <Link to="/quartasemana">Components</Link>
                            </div>
                        </div>


                    </nav>

                </header>
                <main>
                    <Routes>
                        <Route exact path="/relogio" element={<Relogio />} />
                        <Route exact path="/letreiro" element={<Letreiro />} />
                        <Route exact path="/contador" element={<Contador />} />
                        <Route exact path="/terceirasemana" element={<TerceiraSemana />} />
                        <Route exact path="/quartasemana" element={<QuartaSemana />} />
                    </Routes>
                </main>
            </Router >
        </>
    );
}
