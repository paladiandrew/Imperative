import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../components/member-card/member-card.component';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [MemberCardComponent, CommonModule],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.scss'
})
export class TripsComponent {
    members = [
        { year: 2021, name: 'Выезд 1', photoUrl: 'assets/trips/1.jpg' },
        { year: 2020, name: 'Выезд 2', photoUrl: 'assets/trips/1.jpg' },
        { year: 2019, name: 'Выезд 3', photoUrl: 'assets/trips/1.jpg' },
        { year: 2019, name: 'Выезд 4', photoUrl: 'assets/trips/1.jpg' },
      ];
}
