import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, NgZone, Renderer2, ElementRef, HostListener } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ambassador-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ambassador-slider.component.html',
  styleUrls: ['./ambassador-slider.component.scss'],
})
export class AmbassadorSliderComponent implements OnInit, AfterViewInit {
    images = [
      'assets/images/photo1.jpg',
      'assets/images/photo2.jpg',
      'assets/images/photo3.jpg',
      'assets/images/photo4.jpg',
      'assets/images/photo5.jpg',
      'assets/images/photo6.jpg',
    ];
  
    currentIndex = 0;
    displayedImages: number = 1;
  
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
    ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
        this.updateDisplayedImages();
      }
    }

    ngAfterViewInit() {
      if (isPlatformBrowser(this.platformId)) {
        this.updateSlideWidth(); // Вызываем обновление ширины после рендеринга компонента
      }
    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      if (isPlatformBrowser(this.platformId)) {
        this.updateDisplayedImages();
      }
    }
  
    updateDisplayedImages() {
      const width = window.innerWidth; // Теперь доступен только в браузере
      if (width <= 768) {
        this.displayedImages = 1;
      } else if (width <= 999) {
        this.displayedImages = 2;
      } else if (width <= 1299) {
        this.displayedImages = 3;
      } else {
        this.displayedImages = 4;
      }
      
      // Вызов обновления ширины слайдов
      this.updateSlideWidth();
    }
  
    // Метод для обновления ширины слайдов в зависимости от displayedImages
    updateSlideWidth() {
        const slides = document.querySelectorAll('.slide');
        const margin = 10; // Отступ между слайдами в пикселях
        const totalMargins = this.displayedImages * margin; // Сумма отступов для всех слайдов
        
        const containerWidth = document.querySelector('.ambassador-slider')?.clientWidth || 0; // Получаем ширину контейнера
    
        // Доступная ширина для слайдов после вычета отступов
        const availableWidth = containerWidth - totalMargins; // высчитываем доступную ширину
    
        // Ширина каждого слайда в пикселях
        const slideWidth = availableWidth / this.displayedImages;
    
        console.log(`Total Margins: ${totalMargins}, Container Width: ${containerWidth}, Available Width: ${availableWidth}, Slide Width: ${slideWidth}`);
    
        // Устанавливаем ширину для каждого слайда
        slides.forEach((slide) => {
            (slide as HTMLElement).style.flexBasis = `${(slideWidth / containerWidth) * 100}%`; // переводим ширину в проценты
        });
    }

    prevImage() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.updateSlideWidth(); // Обновление ширины и transform
        }
      }
      
      nextImage() {
        if (this.currentIndex < this.images.length - this.displayedImages) {
          this.currentIndex++;
          console.log('Next Image:', this.currentIndex); 
          this.updateSlideWidth(); // Обновление ширины и transform
        }
      }
  
    goToImage(index: number) {
      this.currentIndex = index;
    }
  
    get totalDots() {
      return this.images.length - this.displayedImages + 1;
    }
}