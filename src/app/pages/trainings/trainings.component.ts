import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../components/member-card/member-card.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [MemberCardComponent, HeaderComponent, CommonModule],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.scss'
})
export class TrainingsComponent {
    members = [
        { year: 2021, name: 'Тренинг 1', photoUrl: 'assets/trips/1.jpg' },
        { year: 2020, name: 'Тренинг 2', photoUrl: 'assets/trips/1.jpg' },
        { year: 2019, name: 'Тренинг 3', photoUrl: 'assets/trips/1.jpg' },
        { year: 2019, name: 'Тренинг 4', photoUrl: 'assets/trips/1.jpg' },
      ];
}
