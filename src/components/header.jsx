import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="imperative">Императив</Link>
                <nav className="nav-links">
                    <Link to="/meetings" className="nav-link">Встречи</Link>
                    <Link to="/communities" className="nav-link">Сообщества</Link>
                    <Link to="/about" className="nav-link">О клубе</Link>
                    <Link to="/books" className="nav-link">Книги</Link>
                    <Link to="/contacts" className="nav-link">Контакты</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;