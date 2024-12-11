import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../components/member-card/member-card.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [MemberCardComponent, HeaderComponent, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
    members = [
        { year: 2021, name: 'Книга 1', photoUrl: 'assets/books/1.jpg' },
        { year: 2020, name: 'Книга 2', photoUrl: 'assets/books/1.jpg' },
        { year: 2019, name: 'Книга 3', photoUrl: 'assets/books/1.jpg' },
        { year: 2019, name: 'Книга 4', photoUrl: 'assets/books/1.jpg' },
      ];
}
