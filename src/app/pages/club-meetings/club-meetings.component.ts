import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../components/member-card/member-card.component';

@Component({
  selector: 'app-club-meetings',
  standalone: true,
  imports: [MemberCardComponent, CommonModule],
  templateUrl: './club-meetings.component.html',
  styleUrl: './club-meetings.component.scss'
})
export class ClubMeetingsComponent {
    members = [
        { year: 2021, name: 'Встреча 1', photoUrl: 'assets/meetings/1.jpg' },
        { year: 2020, name: 'Встреча 2', photoUrl: 'assets/meetings/1.jpg' },
        { year: 2019, name: 'Встреча 3', photoUrl: 'assets/meetings/1.jpg' },
        { year: 2019, name: 'Встреча 4', photoUrl: 'assets/meetings/1.jpg' },
      ];
}
