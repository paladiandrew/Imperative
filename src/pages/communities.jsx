import React from 'react';
import group1 from '../assets/images/group1.png';
import rectangle1 from '../assets/images/rectangle1.svg';
import image14 from '../assets/images/image14.png';
import image15 from '../assets/images/image15.png';
import '../styles/communities.css';

const Communities = () => {
  return (
    <div className="communities-container">
        {/* Компонент 1 - обновленная версия с CSS-прямоугольником */}
<div className="communities-hero">
  <div className="communities-custom-rectangle">
    <h1 className="communities-main-title">Сообщество</h1>
  </div>
  <img 
    src={group1} 
    alt="Group" 
    className="communities-group-photo" 
  />
</div>

      {/* Компонент 2 */}
      <div className="communities-slogan">
        <h2>Создать среду, дающую поддержку и новые возможности</h2>
      </div>

      {/* Компонент 3 */}
      <div className="communities-description">
        <img src={image14} alt="Community" className="communities-description-image" />
        <div className="communities-description-text">
          <p>Мы верим, что люди из разных сфер, обмениваясь опытом и знаниями, получают возможность увидеть максимально объемную картину. А лучшие идеи рождаются в диалоге.</p>
          <p>Меняться и менять, создавать, развивать, переходить на новый уровень, — сообщество объединяет тех, кому это важно.</p>
        </div>
      </div>

      {/* Компонент 4 */}
      <h2 className="communities-subtitle">Что здесь происходит?</h2>

      {/* Компонент 5 */}
      <div className="communities-mission">
        <p>Сообщество — это дополнительные возможности для его участников, лояльность и поддержка Клуба. Для тех, кто готов делиться опытом и объединяться с другими. Мы собираем вместе людей с похожими ценностями и позицией. Нам важно поддерживать атмосферу открытости и внимания друг к другу. Поэтому вступить в сообщество возможно только по приглашению Клуба и рекомендации участников.</p>
      </div>

      {/* Компонент 6 */}
      {/* Компонент 6 */}
<div className="communities-quality-block">
  <h3 className="communities-quality-top">НОВОЕ КАЧЕСТВО</h3>
  <img src={image15} alt="New Quality" className="communities-quality-center-image" />
  <h3 className="communities-quality-bottom">НОВОЕ КАЧЕСТВО</h3>
</div>

      {/* Компонент 7 */}
      <h2 className="communities-values-title">Ценности</h2>

      {/* Компонент 8 */}
      <div className="communities-values">
        <h3>ОБЪЕДИНЯТЬ</h3>
        <p>Закрытые мероприятия для members, спецпроекты членов сообщества, встречи и коллаборации, круги по интересам и клубы внутри Клуба</p>
        
        <h3>ДЕЛИТЬСЯ</h3>
        <p>Обмен опытом и информацией внутри сообщества, приглашенные гости, public talks и мастер-классы, лектории и дискуссионные клубы.</p>
        
        <h3>СОЗДАВАТЬ</h3>
        <p>Создание собственных проектов и сообществ, поддержка Клуба, реализация идей, новый опыт и эмоции, возможности и окружение.</p>
      </div>
    </div>
  );
};

export default Communities;