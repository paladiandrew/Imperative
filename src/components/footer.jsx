import React from 'react';
import { Link } from 'react-router-dom';
import tgIcon from '../assets/images/tg.png';
import instIcon from '../assets/images/inst.png';
import '../styles/footer.css'; // Обязательно подключите CSS файл

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link to="/communities" className="footer-link">Сообщества</Link>
                <Link to="/about" className="footer-link">О клубе</Link>
                <Link to="/contacts" className="footer-link">Контакты</Link>

            </div>
            <div className="footer-icons">
  <a href="https://t.me/kasatkin_books_club" target="_blank" rel="noopener noreferrer">
    <img src={tgIcon} alt="Telegram" className="footer-icon" />
  </a>
  <a href="https://www.instagram.com/menclub_books/profilecard/?igsh=bWN0YTJ2MGY5MHRx" target="_blank" rel="noopener noreferrer">
    <img src={instIcon} alt="Instagram" className="footer-icon" />
  </a>
</div>
        </footer>
    );
}

export default Footer;