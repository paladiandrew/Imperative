import React from 'react';
import group1 from '../assets/images/group1.png';
import rectangle1 from '../assets/images/rectangle1.svg';
import meetingPhoto from '../assets/images/meetings/0.png';
import tgIcon from '../assets/images/tg.png';
import '../styles/meetings.css';

const Meetings = () => {
  return (
    <div className="meetings-container">
      {/* Компонент 1 - Герой */}
      <div className="meetings-hero">
        <div className="meetings-custom-rectangle">
          <h1 className="meetings-main-title">События</h1>
        </div>
        <img src={group1} alt="Group" className="meetings-group-photo" />
      </div>

      {/* Компонент 2 */}
      <div className="meetings-slogan">
        <p>Обмен опытом и идеями внутри сообщества, встречи с приглашенными гостями и мастер-классы.</p>
      </div>

      {/* Компонент 3 */}
      <div className="meetings-description">
        <p>Мы проводим мероприятия для членов клуба, спецпроекты, встречи и коллаборации.</p>
      </div>

      {/* Компонент 4 */}
      <h2 className="meetings-event-title">Выезд “Тотальный Императив”</h2>

      {/* Компонент 5 */}
      <img src={meetingPhoto} alt="Event" className="meetings-event-photo" />

      {/* Компонент 6 */}
      <div className="meetings-event-details">
        <span>Локация: Шри-Ланка</span>
        <span className="meetings-details-space"> </span>
        <span>Даты: 24-31 марта 2024</span>
      </div>

      {/* Компонент 7 */}
      <h2 className="meetings-subtitle">Киноклубы</h2>

      {/* Компонент 8 */}
      <p className="meetings-frequency">Раз в 2 недели по вторникам</p>

      {/* Компонент 9 */}
      <div className="meetings-cinema-description">
        <p>Каждая профессия ставит перед человеком сложные выборы. Герои нашего киновечера задаются вопросом: "Стоит ли моя работа тех вещей, с которыми приходится мириться?" — и дают на него разные ответы.</p>
      </div>

      {/* Компонент 10 */}
      <h2 className="meetings-price-title">Стоимость</h2>

      {/* Компонент 11 - обновленная версия */}
<div className="meetings-price-block">
  <p className="meetings-price-offline">Offline-группа: 20 000</p>
  <div className="meetings-booking">
    <span className="meetings-booking-text">Бронирование:</span>
    <img src={tgIcon} alt="Telegram" className="meetings-tg-icon" />
    <span className="meetings-booking-contact">@DanKas95</span>
  </div>
</div>
    </div>
  );
};

export default Meetings;