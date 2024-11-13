import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss'
})
export class MemberCardComponent {
    @Input() year!: number; // Входной параметр для года
    @Input() name!: string; // Входной параметр для имени
    @Input() photoUrl!: string; // Входной параметр для ссылки на фото
  }
