import React from 'react';
import group1 from '../assets/images/group1.png';
import image11 from '../assets/images/image11.png';
import image12 from '../assets/images/image12.png';
import aboutIcon1 from '../assets/images/about-icon-1.png';
import aboutIcon2 from '../assets/images/about-icon-2.png';
import aboutIcon3 from '../assets/images/about-icon-3.png';
import '../styles/about.css';

const About = () => {
    return (
        <div className='about'>
            <div className="about-container">
                <div className="about-content">
                    <h2 className="about-title">О клубе</h2>
                    <div className="image-container">
                        <div className="about-image-rectangle" />
                        <div className="centered-text">
                            <h1 className="club-message">Клуб, как школа и семья</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="description-container">
                <div className="left-section">
                    <img src={group1} alt="Group" className="group-image" />
                    <p className="left-text">
                        Императив был основан в 2023 году как пространство для обмена знаниями и опытом среди любителей литературы и личностного роста.
                    </p>
                </div>
                <div className="divider"></div>
                <div className="right-section">
                    <p className="right-text">
                        Наша цель — создать сообщество, где участники могут обсуждать не только бизнес-литературу, но и книги, которые способствуют личностному развитию, искусству общения и культурному обмену. Мы проводим индивидуальные собеседования с каждым новым членом клуба, чтобы лучше понять их потребности и ожидания.
                    </p>
                </div>
            </div>

            <div className="centered-text-container">
                <p className="centered-text2">
                    Каждый из участников имеет возможность выбрать курс на основе своих интересов, будь то изучение специфических жанров или развитие навыков публичных выступлений.
                </p>
            </div>

            <div className="new-component">
                <div className="new-component-container">
                    <img src={image11} alt="Image 11" className="image11" />
                    <div className="new-component-text">
                        <h3 className="text1">Императив — это наши участники, тренеры и амбассадоры клуба, а также команда организаторов, которая работает на успех каждого члена.</h3>
                        <h4 className="text2">Мы гордимся тем, что в нашем клубе собрались умные, инициативные и амбициозные люди. Мы обещаем индивидуальный подход к каждому, гарантируя высококачественное обучение и конфиденциальность.</h4>
                    </div>
                </div>
            </div>

            <div className="divider-line"></div>

            <div className="profile-component">
                <div className="profile-left">
                    <p className="profile-text">
                        Опытный бизнесмен и организатор, который умеет вдохновлять и мотивировать участников клуба. 
                        Михаил активно делится своим опытом в области бизнеса и личностного роста, 
                        участвуя в наших мероприятиях и курсах.
                    </p>
                </div>
                
                <div className="profile-center">
                    <img src={image12} alt="Image 12" className="profile-image" />
                    <h4 className="profile-name">Касаткин Михаил</h4>
                </div>
                
                <div className="profile-right">
                    <p className="profile-description">
                        Его подход сочетает в себе элементы делового общения и творческого мышления, 
                        что делает каждую встречу клуба уникальным и вдохновляющим событием.
                    </p>
                </div>
            </div>

            <div className="join-us">
                <h2 className="join-title">Как вступить в клуб?</h2>
                <h2 className="join-steps">3 шага</h2>
            </div>

            <div className="instructions-container">
                <div className="instruction-box">
                    <img src={aboutIcon1} alt="Icon 1" className="instruction-icon" />
                    <p className="instruction-text">1. Заполните анкету участника, которая прикреплена ниже.</p>
                </div>
                <div className="instruction-box">
                    <img src={aboutIcon2} alt="Icon 2" className="instruction-icon" />
                    <p className="instruction-text">2. Пройдите видео-собеседование с основателем клуба Михаилом Касаткиным.</p>
                </div>
                <div className="instruction-box">
                    <img src={aboutIcon3} alt="Icon 3" className="instruction-icon" />
                    <p className="instruction-text">3. Получите приглашение на гостевую встречу Мужского Книжного бизнес-клуба.</p>
                </div>
            </div>

            <div className="membership-cost">
                <h2 className="cost-title">Стоимость членства в книжном клубе</h2>
            </div>

            <div className="membership-prices">
                <div className="membership-item">
                    <p>В месяц</p>
                    <p>Online-группа: 12 000</p>
                    <p>Offline-группа: 20 000</p>
                </div>
                <div className="membership-item">
                    <p>За полгода</p>
                    <p>Online-группа: 48 000</p>
                    <p>Offline-группа: 80 000</p>
                </div>
            </div>
        </div>
    );
}

export default About;