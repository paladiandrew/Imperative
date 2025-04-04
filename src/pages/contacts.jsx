import React from 'react';
import group1 from '../assets/images/group1.png';
import contact1 from '../assets/images/contact1.png';
import contact2 from '../assets/images/contact2.png';
import tgIcon from '../assets/images/tg.png';
import instIcon from '../assets/images/inst.png';
import '../styles/contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      {/* Компонент 1 - Герой */}
      <div className="contacts-hero">
        <div className="contacts-custom-rectangle">
          <h1 className="contacts-main-title">Контакты</h1>
        </div>
        <img src={group1} alt="Group" className="contacts-group-photo" />
      </div>

      {/* Компонент 2 */}
      <div className="contacts-intro">
        <p>Здесь вы найдете контактные данные для связи с нашим клубом. Пишите нам с вопросами или предложениями - мы будем рады помочь!</p>
      </div>

      {/* Компонент 3 */}
      <h2 className="contacts-leader">Основатель и ведущий клуба — Касаткин Михаил</h2>

      {/* Компонент 4 */}
      <div className="contacts-card">
        <img src={contact1} alt="Contact 1" className="contacts-main-photo" />
        <div className="contacts-socials">
    <a href="https://t.me/Men_Leadership" target="_blank" rel="noopener noreferrer">
        <img src={tgIcon} alt="Telegram" className="contacts-social-icon" />
    </a>
    <a href="https://www.instagram.com/kasatkin_motivator?igsh=dWF2cWcyYnhjZm4y" target="_blank" rel="noopener noreferrer">
        <img src={instIcon} alt="Instagram" className="contacts-social-icon" />
    </a>
</div>
      </div>

      {/* Компонент 5 */}
      <h2 className="contacts-leader">Распорядитель клуба — Крутов Артемий</h2>

      {/* Компонент 6 */}
      <div className="contacts-card">
        <img src={contact2} alt="Contact 2" className="contacts-main-photo" />
        <div className="contacts-socials">
    <a href="https://t.me/artemgibdog" target="_blank" rel="noopener noreferrer">
        <img src={tgIcon} alt="Telegram" className="contacts-social-icon" />
    </a>
    <a href="https://www.instagram.com/menclub_books/profilecard/?igsh=bWN0YTJ2MGY5MHRx" target="_blank" rel="noopener noreferrer">
        <img src={instIcon} alt="Instagram" className="contacts-social-icon" />
    </a>
</div>
      </div>
    </div>
  );
};

export default Contacts;