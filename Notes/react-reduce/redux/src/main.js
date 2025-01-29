import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './main.css';
import React from 'react';
import Userdetail from './user';
import About from './about';
import Contact from './contact';
import Home from './home';

function Main() {
    return (
        <Router>
            <div>
                <h1>THIS IS MAIN PAGE</h1>
                <nav className='navbar'>
                    <ul className='link'>
                        <li>
                            <Link to='/home' className='j'>Home</Link>
                        </li>
                        <li>
                            <Link to='/user' className='j'>User</Link>
                        </li>
                        <li>
                            <Link to='/about' className='j'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='j'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/user' element={<Userdetail />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default Main;