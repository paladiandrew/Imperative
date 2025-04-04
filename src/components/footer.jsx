import React from 'react';
import tgIcon from '../assets/images/tg.png';
import instIcon from '../assets/images/inst.png';
import '../styles/footer.css'; // Обязательно подключите CSS файл

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="#community" className="footer-link">Сообщество</a>
                <a href="#about" className="footer-link">О клубе</a>
                <a href="#contacts" className="footer-link">Контакты</a>
            </div>
            <div className="footer-icons">
                <img src={tgIcon} alt="Telegram" className="footer-icon" />
                <img src={instIcon} alt="Instagram" className="footer-icon" />
            </div>
        </footer>
    );
}

export default Footer;