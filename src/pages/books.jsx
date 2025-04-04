import React from 'react';
import book1 from '../assets/images/books/book1.png';
import book2 from '../assets/images/books/book2.png';
import book3 from '../assets/images/books/book3.png';
import book4 from '../assets/images/books/book4.png';
import book5 from '../assets/images/books/book5.png';
import book6 from '../assets/images/books/book6.png';
import book7 from '../assets/images/books/book7.png';
import book8 from '../assets/images/books/book8.png';
import book9 from '../assets/images/books/book9.png';
import book10 from '../assets/images/books/book10.png';
import book11 from '../assets/images/books/book11.png';
import book12 from '../assets/images/books/book12.png';
import '../styles/books.css';

const booksData = [
  { id: 1, title: "Договориться можно обо всем", image: book1 },
  { id: 2, title: "Сиддхартха", image: book2 },
  { id: 3, title: "Продавец обуви", image: book3 },
  { id: 4, title: "Ненасильственное общение", image: book4 },
  { id: 5, title: "Атомные привычки", image: book5 },
  { id: 6, title: "Крестный отец", image: book6 },
  { id: 7, title: "Третья альтернатива", image: book7 },
  { id: 8, title: "WILL", image: book8 },
  { id: 9, title: "7 навыков высокоэффективных людей", image: book9 },
  { id: 10, title: "Технология жизни.Книга для героев", image: book10 },
  { id: 11, title: "Sapiens. Краткая история человечества", image: book11 },
  { id: 12, title: "Поток. Психология переживания", image: book12 },
];

const Books = () => {
  return (
    <div className="books-container">
      {/* Компонент 1 */}
      <div className="books-hero">
        <h1 className="books-title">Книги</h1>
        <div className="books-description">
          <p>Добро пожаловать в наш раздел, посвященный книгам! Здесь вы найдете тщательно отобранные произведения, которые стали основой наших обсуждений и вдохновением для каждого члена нашего книжного клуба. Мы стремимся делиться знаниями и эмоциями, которые книги могут подарить. На этой странице вы найдете карточки с любимыми книгами наших участников, включая краткие аннотации и мнения о каждой из них. Присоединяйтесь к нам в чтении и открывайте новые горизонты вместе!</p>
        </div>
      </div>

      {/* Компонент 2 */}
      <h2 className="books-program-title">Годовая программа книг</h2>

      {/* Компонент 3 */}
      <div className="books-grid">
        {booksData.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <img src={book.image} alt={book.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;