import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmbassadorSliderComponent } from '../components/ambassador-slider/ambassador-slider.component';

@Component({
  selector: 'app-about-club',
  standalone: true,
  imports: [CommonModule, AmbassadorSliderComponent],
  templateUrl: './about-club.component.html',
  styleUrls: ['./about-club.component.scss']
})
export class AboutClubComponent implements OnInit {  
  isSticky: boolean = false;
  ngOnInit(): void {
    this.checkWindowSize(window.innerWidth); 
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.checkWindowSize(width);  // Проверяем размер окна при изменении
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isSticky) {
    const scrollPosition = window.scrollY; // Получаем положение прокрутки окна
    const image = document.querySelector('.team-image') as HTMLElement;

    if (image) {
      // Увеличиваем отрицательный трансформ в зависимости от положения прокрутки
      const translateY = scrollPosition * 0.2; // Регулируйте значение для изменения скорости
      image.style.transform = `translateY(-${translateY}px)`;
    }
  }
}
  private checkWindowSize(width: number) {
    this.isSticky = width > 900; // Устанавливаем флаг, будет ли изображение липким
  }
}