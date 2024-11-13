import { Component } from '@angular/core';
import { AmbassadorCardComponent } from '../components/ambassador-card/ambassador-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ambassadors',
  standalone: true,
  imports: [AmbassadorCardComponent, CommonModule],
  templateUrl: './ambassadors.component.html',
  styleUrl: './ambassadors.component.scss'
})
export class AmbassadorsComponent {
    ambassadors = [
      { name: 'Имя 1', ambassadorYear: 2020, memberYear: 2019, photo: 'assets/images/photo1.jpg' },
      { name: 'Имя 2', ambassadorYear: 2020, memberYear: 2019, photo: 'assets/images/photo2.jpg' },
      { name: 'Имя 3', ambassadorYear: 2020, memberYear: 2019, photo: 'assets/images/photo3.jpg' },
      { name: 'Имя 4', ambassadorYear: 2020, memberYear: 2019, photo: 'assets/images/photo4.jpg' },
      { name: 'Имя 5', ambassadorYear: 2020, memberYear: 2019, photo: 'assets/images/photo5.jpg' },
      { name: 'Имя 6', ambassadorYear: 2020, memberYear: 2019, photo: 'assets/images/photo6.jpg' }
    ];
  }
