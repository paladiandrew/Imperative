import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ambassador-card',
  standalone: true,
  imports: [],
  templateUrl: './ambassador-card.component.html',
  styleUrl: './ambassador-card.component.scss'
})
export class AmbassadorCardComponent {
    @Input() name: string = '';
    @Input() ambassadorYear: number = 2020;
    @Input() memberYear: number = 2019;
    @Input() photo: string = '';
  }