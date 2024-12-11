import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../components/member-card/member-card.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-hall-of-fame',
  standalone: true,
  imports: [MemberCardComponent, HeaderComponent, CommonModule],
  templateUrl: './hall-of-fame.component.html',
  styleUrl: './hall-of-fame.component.scss'
})
export class HallOfFameComponent {
    members = [
        { year: 2021, name: 'Иван Иванов', photoUrl: 'assets/hall_of_fame/1.jpg' },
        { year: 2020, name: 'Петр Петров', photoUrl: 'assets/hall_of_fame/1.jpg' },
        { year: 2019, name: 'Сидор Сидоров', photoUrl: 'assets/hall_of_fame/1.jpg' },
        { year: 2019, name: 'Сидор Сидоров', photoUrl: 'assets/hall_of_fame/1.jpg' },
      ];
}
