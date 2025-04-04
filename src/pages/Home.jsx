import React from "react";
import group1 from "../assets/images/group1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import "../styles/Home.css";

const Home = () => {
    return (
      <div className="home">
        {/* Hero Section */}
        <div className="home__content">
          <img src={group1} alt="Group" className="home__square-img" />
          <div className="home__rectangle"></div>
          <img src={image7} alt="Decoration" className="home__decoration-img" />
          <div className="home__text-block">
            <h1 className="home__main-title">Чтение и обсуждение</h1>
            <p className="home__main-descr">
              Мы читаем великие книги вместе, обсуждаем в окружении единомышленников и применяем знания в личной жизни и в бизнесе.
            </p>
          </div>
        </div>

        {/* Club Section */}
        <div className="home__club-section">
          <h2 className="home__club-title">Клуб чтения для успешных мужчин</h2>
          <p className="home__club-descr">Обсуждаем книги и применяем знания</p>
        </div>
        
        {/* Info Section */}
        <div className="home__info-section">
          {/* Block 1 */}
          <div className="home__info-block">
            <img src={image6} alt="Reading" className="home__info-img" />
            <div className="home__info-text home__info-text--right">
              <h3 className="home__info-title">Чтение великих книг</h3>
              <p className="home__info-descr">
                В "Императиве" мы читаем и обсуждаем великие книги, которые расширяют наш кругозор и помогают в личной и профессиональной жизни.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="home__info-block">
            <div className="home__info-text home__info-text--left">
              <h3 className="home__info-title">Обсуждение и анализ</h3>
              <p className="home__info-descr">
                Мы собираемся, чтобы обсудить прочитанное, обменяться мнениями и углубиться в анализ, что помогает лучше усваивать материал.
              </p>
            </div>
            <img src={image3} alt="Discussion" className="home__info-img" />
          </div>

          {/* Block 3 */}
          <div className="home__info-block">
            <img src={image8} alt="Application" className="home__info-img" />
            <div className="home__info-text home__info-text--right">
              <h3 className="home__info-title">Применение знаний</h3>
              <p className="home__info-descr">
                Применяем полученные знания в личной жизни и бизнесе, чтобы стать более успешными и целеустремленными.
              </p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="home__info-block">
            <div className="home__info-text home__info-text--left">
              <h3 className="home__info-title">Сообщество единомышленников</h3>
              <p className="home__info-descr">
                Наш клуб предоставляет уникальную возможность быть частью сообщества успешных мужчин, которые поддерживают друг друга в стремлении к знаниям и развитию.
              </p>
            </div>
            <img src={image2} alt="Community" className="home__info-img" />
          </div>
        </div>

        {/* Contacts Section */}
        <div className="home__contacts">
          <img src={group1} alt="Contact" className="home__contact-square" />
          <div className="home__contact-rectangle"></div>
          <div className="home__contact-block">
            <div className="home__gradient-box">
              <h3 className="home__gradient-title">Присоединяйтесь к нашему клубу.</h3>
              <p className="home__gradient-descr">Императив - это уникальное место для обсуждения и анализа книг</p>
                <Link to="/contacts" className="home__contact-btn">
                    Контакты
                </Link>
            </div>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="home__spacer"></div>
      </div>
    );
};

export default Home;