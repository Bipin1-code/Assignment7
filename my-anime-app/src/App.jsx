import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import AnimeList from './pages/AnimeList';
import AnimeDetail from "./pages/AnimeDetail"
import SignIn from './pages/SignIn';

const App = () => {
    return (
        <Router>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/animelist" element={<AnimeList />} />
                <Route path="/anime/:id" element={<AnimeDetail />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    );
};

export default App;
